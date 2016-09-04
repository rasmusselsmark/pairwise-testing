all: # pict
	cd web; npm install; npm start

.PHONY: pict
pict:
	make --directory=pict

dev:
	cd web; npm install; npm run-script watch

docker:
	docker build .
