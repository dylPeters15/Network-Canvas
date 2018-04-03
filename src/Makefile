quick_build:
	cordova build

full_build:
	npm install
	bower update
	cordova prepare || cordova prepare
	make quick_build

clean_build:
	make clean
	make full_build


quick_emulate:
	cordova emulate

full_emulate:
	make full_build
	make quick_emulate

clean_emulate:
	make clean
	make full_emulate


quick_run:
	cordova run

full_run:
	make full_build
	make quick_run

clean_run:
	make clean
	make full_run

clean:
	rm -rf bower_components node_modules platforms plugins