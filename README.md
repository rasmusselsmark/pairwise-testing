# pairwise-testing

Web frontend for Microsoft PICT tool for pairwise testing

## PICT

Pairwise Independent Combinatorial Tool by Microsoft for generating combinations based on specified parameters, typically used for testcase generation. Available at <https://github.com/microsoft/pict>

## About this tool

PICT is one of the tools I'm using relatively often in my work to provide sufficient coverage during either manual exploratory testing of a new feature, or when developing test automation. For this reason, I wanted to make a simple web frontend for PICT.

## Building and running

### Local development

1. Run `make pict`
1. Run `make dev`
1. Open <http://localhost:3000>

### Local production

1. Run `make`

### Docker container

Prequisites:

- Docker

To build docker container with pict and website

1. Run `make docker` from Docker Quickstart Terminal
