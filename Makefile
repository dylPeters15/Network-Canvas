all:
	npm install
	bower update
	cordova prepare
	cordova build
	cordova emulate

clean:
	rm -rf bower_components node_modules platforms plugins
