var ghpages = require('gh-pages');

ghpages.publish('_gh_pages', function(error) {
    console.error("Exiting with error", error);
    return;
});