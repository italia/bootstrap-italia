const fs = require("fs"),
  path = require("path");

const breakings = {};

const capitalizeFirstLetter = (val) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const getExtension = (filename) => {
  var file = path.basename(filename);
  return file.split('.');
}

const walk = (dir, callback) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filepath = path.join(dir, file);
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      walk(filepath, callback);
    } else if (stats.isFile()) {
      callback(filepath, stats);
    }
  });
}

const getBreaking = (filepath, _) => {
  const reFilter = /## Breaking change(.|\n)*/gm;
  const reBreak = /{% capture callout %}((.|\n)*?){% endcapture %}{% include .* version="(.*)" .* %}/gm;
  const [filename, ext] = getExtension(filepath)
  const component = capitalizeFirstLetter(filename.replaceAll('-', ' '))
  if (ext === 'md') {
    const data = fs.readFileSync(filepath, 'utf8');
    filteredBreaking = reFilter.exec(data)
    if (filteredBreaking) {
      singleBreakings = reBreak.exec(filteredBreaking[0])
      while (singleBreakings) {
        const version = singleBreakings[3]
        const text = singleBreakings[1]
        if (!breakings[version]) {
          breakings[version] = {}
        }
        if (!breakings[version][component]) {
          breakings[version][component] = []
        }
        breakings[version][component].push(text)
        singleBreakings = reBreak.exec(filteredBreaking[0])
      }
    }
  }
}

const compareVersions = (v1, v2) => {
  return parseInt(v2.replaceAll('.', '')) - parseInt(v1.replaceAll('.', ''))
}

const writeBreakings = (breakings) => {
  let markDown = ''
  for (const version of Object.keys(breakings).sort(compareVersions)) {
    markDown += `## ${version}\n\n`;
    markDown += `[Changelog completo](https://github.com/italia/bootstrap-italia/releases/tag/v${version}) <svg class="icon steppers-success" aria-hidden="true"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-file"></use></svg>\n\n`
    for (const component of Object.keys(breakings[version]).sort()) {
      markDown += `### ${component  === 'Introduzione' ? 'Generale' : component}\n`;
      for (const br of breakings[version][component]) {
        markDown += `${br}\n\n`;
      }
    }
  }
  return markDown;
}

walk("./docs", getBreaking, ['md']);
const finalMarkdown = writeBreakings(breakings);

fs.writeFileSync('_includes/breaking-features-list.md', finalMarkdown )
