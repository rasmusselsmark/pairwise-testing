FROM alpine:latest

# install dependencies
RUN apk add --update alpine-sdk
RUN apk add --update clang
RUN apk add --update nodejs
RUN apk add --update python
RUN apk add --update bash

EXPOSE 3000

COPY . /pairwise-testing/

WORKDIR /pairwise-testing
RUN make
