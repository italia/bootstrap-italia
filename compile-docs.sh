#!/bin/bash

git clone https://github.com/italia/bootstrap-italia.git

cd bootstrap-italia

git checkout 1.x

npm i && bundle install && npm run build && JEKYLL_ENV=production bundle exec jekyll build --config _config.yml,_config_production.yml

cd ..

mv bootstrap-italia/_site ./_site/1.x
