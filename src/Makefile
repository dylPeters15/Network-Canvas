BUILD_ARTIFACTS = bower_components node_modules platforms plugins

build:
	npm install --save-exact
	bower update
	cordova prepare || cordova prepare
	cordova build

clean:
	rm -rf ${BUILD_ARTIFACTS}

clean-build:
	make clean
	make build

clean-run:
	make clean
	make run

run:
	make build
	cordova run