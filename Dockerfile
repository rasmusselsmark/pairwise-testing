FROM alpine:3.3

RUN apk add --update alpine-sdk
RUN apk add --update clang

COPY . /pairwise-testing/
WORKDIR /pairwise-testing

RUN make
RUN pict/pict
