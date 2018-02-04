all:
	cordova prepare
	cordova build
	cordova emulate

dependencies:
	npm install
	bower update

clean:
	rm -rf bower_components node_modules platforms plugins
