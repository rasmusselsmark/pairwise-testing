dockerimage := pairwise-testing-image
dockername := pairwise-testing

.PHONY: all
all: pict web

.PHONY: pict
pict:
	make --directory=pict

.PHONY: web
web:
	cd web; npm install

.PHONY: dev
dev:
	cd web; npm install; npm run watch

.PHONY: run-server
run-server:
	cd web; npm start

.PHONY: docker-build
docker-build:
	docker build --tag $(dockerimage) .

.PHONY: docker-run
docker-run:
	docker ps --all --quiet --filter name=$(dockername) | xargs docker rm --force
	docker run --name $(dockername) --publish 3000:3000 $(dockerimage)

.PHONY: docker-stop
docker-stop:
	docker stop $(dockername)

.PHONY: init-submodules
init-submodules:
	git submodule update --remote --init && git submodule foreach 'git checkout master'

.PHONY: update-submodules
update-submodules:
	git submodule foreach 'git remote update -p && git pull --rebase origin master'
