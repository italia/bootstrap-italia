FROM timbru31/ruby-node:3.0-16

WORKDIR /app

EXPOSE 3001
EXPOSE 4000

RUN apt-get update && apt-get install -y chromium

COPY ./Gemfile /app
COPY ./Gemfile.lock /app

RUN bundle config set --local deployment true
RUN bundle install

COPY ./package-lock.json /app
COPY ./package.json /app

RUN npm ci

RUN npm i gulp -g
