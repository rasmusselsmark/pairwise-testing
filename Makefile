all:
	make --directory=pict

docker:
	docker build .
