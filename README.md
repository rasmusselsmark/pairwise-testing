# pairwise-testing

Web frontend for Microsoft PICT tool for pairwise test case generation

## PICT

Pairwise Independent Combinatorial Tool by Microsoft for generating combinations based on specified parameters, typically used for testcase generation. Available at <https://github.com/microsoft/pict>

## About this tool

PICT is one of the tools I'm using relatively often in my work to provide sufficient coverage during either manual exploratory testing of a new feature, or when developing test automation. For this reason, I wanted to make a simple web frontend for PICT.

## Building and running

### Local development

1. Run `make`
1. Run `make dev`
1. Open <http://localhost:3000>

### Local production

1. Run `make`
1. Run `make run-server`

### Docker container

Prequisites:

- Docker <https://www.docker.com/>

To build docker container with pict and website

1. Run `make docker-build` from Docker Quickstart Terminal to build docker image
1. Run `make docker-run` to start Docker container
