FROM timbru31/ruby-node:3.1-20

WORKDIR /app

EXPOSE 3001
EXPOSE 4000

RUN apt-get update && apt-get install -y chromium

COPY ./Gemfile /app
COPY ./Gemfile.loc[k] /app

RUN bundle config set --local deployment true
RUN bundle config unset deployment
RUN gem install bundler:2.3.0
RUN bundle install

COPY ./package-lock.json /app
COPY ./package.json /app

RUN npm ci

