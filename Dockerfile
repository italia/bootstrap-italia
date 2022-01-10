FROM timbru31/ruby-node:3.0-16

WORKDIR /app 

EXPOSE 3001
EXPOSE 4000

COPY ./Gemfile /app
COPY ./Gemfile.lock /app
COPY ./package-lock.json /app
COPY ./package.json /app

RUN bundle install

RUN npm i

RUN npm i gulp -g