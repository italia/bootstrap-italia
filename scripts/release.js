const fs = require("fs");
const octokit = require("@octokit/rest")();

const { getChangelog } = require("./changelog");

const dist = process.cwd() + "/dist/zip/";
const {
  CIRCLE_PROJECT_USERNAME,
  CIRCLE_PROJECT_REPONAME,
  CIRCLE_TAG,
  GITHUB_TOKEN
} = process.env;

if (!fs.existsSync(dist)) {
  console.error("No build output found");
  process.exit(1);
}

const token = GITHUB_TOKEN;
octokit.authenticate({ type: "token", token });

const files = fs.readdirSync(dist);

(async () => {
  try {
    const owner = CIRCLE_PROJECT_USERNAME;
    const repo = CIRCLE_PROJECT_REPONAME;
    const tag = CIRCLE_TAG;

    let release;
    try {
      release = await octokit.repos.getReleaseByTag({ owner, repo, tag });
    } catch (error) {
      // No release found, created below
    }

    if (!release) {
      release = await octokit.repos.createRelease({
        owner,
        repo,
        tag_name: tag
      });
    }

    const changelog = await getChangelog();

    function upload(filename) {
      const { upload_url } = release.data;
      const asset = dist + filename;

      return octokit.repos.uploadAsset({
        url: upload_url,
        file: fs.readFileSync(asset, null).buffer,
        contentType: "application/javascript",
        contentLength: fs.statSync(asset).size,
        name: filename
      });
    }

    function update() {
      const { id } = release.data;

      return octokit.repos.editRelease({
        id,
        owner,
        repo,
        tag_name: tag,
        body: changelog
      });
    }

    const promises = [];
    promises.push(update());

    files.map(filename => {
      console.info(`Uploading asset ${filename}`);
      promises.push(upload(filename));
    });

    Promise.all(promises)
      .then(() => {
        console.info(`GitHub Release completed`);
        process.exit();
      })
      .catch(err => {
        console.info(`GitHub Release failed`);
        console.error(err);
        process.exit(1);
      });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
