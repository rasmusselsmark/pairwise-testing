FROM alpine:3.3

# install required dependencies
RUN apk add --update alpine-sdk
RUN apk add --update clang
RUN apk add --update nodejs
RUN apk add --update python

COPY . /pairwise-testing/

# build PICT and run node server in our docker container
EXPOSE 3000
WORKDIR /pairwise-testing
RUN make
