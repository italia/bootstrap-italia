FROM debian:testing-slim
RUN apt-get update

RUN apt-get install -y bzip2
RUN apt-get install -y libssl-dev
RUN apt-get install -y build-essential
RUN apt-get install -y zlib1g-dev

RUN apt-get update -yq \
   && apt-get install curl gnupg -yq \
   && curl -sL https://deb.nodesource.com/setup_14.x | bash - \
   && apt-get install nodejs -yq \
   && apt-get clean -y

RUN apt-get install -y ruby-dev
RUN gem install bundler


EXPOSE 4000:4000
