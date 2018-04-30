const yaml = require("js-yaml");
const fs = require("fs");

const path = "_config.yml";
const encoding = "utf8";

// package.json is updated by `github.com/zeit/release` or similar
const version = require("../package.json").version;

try {
  let doc = yaml.safeLoad(fs.readFileSync(path, encoding));
  doc.current_version = version;
  fs.writeFileSync(path, yaml.safeDump(doc), encoding);
} catch (e) {
  console.error(e);
}
