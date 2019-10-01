const { getChangelog } = require("./changelog");
const fs = require('fs');

(async () => {
  const changelog = await getChangelog();

  fs.writeFile('changelog.txt', changelog, function (err) {
    if (err) throw err;
    console.log('changelog.txt has been created successfully.');
  });
})();


