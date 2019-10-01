const conventionalChangelog = require("conventional-changelog");

module.exports.getChangelog = async () => {
  let content = "";

  const changelogStream = conventionalChangelog(
    {
      // `conventional-changelog` options
      releaseCount: 2
    }
  );

  return new Promise(function(resolve, reject) {
    changelogStream.on("data", buffer => (content += buffer.toString()));
    changelogStream.on("end", () => resolve(content));
    changelogStream.on("error", err => reject(err));
  });
};
