const replace = require("replace-in-file");

const path = "_config.yml";
// package.json is updated by `npm version major/minor/patch` or similar
const version = require("../package.json").version;

const options = {
  // Single file
  files: path,
  // Replacement to make (string or regex)
  from: /current_version:.+/gi,
  to: `current_version:\t\t${version}`
};

try {
  let changedFiles = replace.sync(options);
  console.info("Modified files:", changedFiles.join(", "));
} catch (error) {
  console.error(e);
  process.exit(1);
}
