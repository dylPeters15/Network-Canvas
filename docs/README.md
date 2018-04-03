# Network Canvas

## Contributing - Getting Started
This is a Cordova-based application designed specifically for Android tablets. It may work on Android phones and iOS devices, but no guarantees are made. This document will make the following assumptions:

- The reader plans to use an Android tablet for development or testing. (The testing device may be physical or virtual. Instructions for setting up each will be given.)
- The user's computer is able to execute the UNIX command line and the user has a working knowledge of the command line interface.

1. You will need the following dependencies to develop this project:
	- [git](https://git-scm.com/downloads): This is the version control system used to host and version the files.
	- [Node.js and npm](https://nodejs.org/en/): This is a version of javascript. It has [Cordova](https://www.npmjs.com/package/cordova) (the cross-platform compiler), [Bower](https://www.npmjs.com/package/bower) (a package manager), and [Grunt](https://www.npmjs.com/package/grunt) (a JavaScript task runner) already packaged with it. 
2. Clone the git repository. 

	```
	git clone git@github.com:dylPeters15/Network-Canvas.git
	```

3. Navigate to the git repository using the command line. 

	```
	cd Network-Canvas
	```

4. Compile and run depending on your debugging method of choice. An in-depth description of debugging methods is below.

## Building
1. Install npm packages.

	```
	npm install
	```

2. Install Bower dependencies.

	```
	bower update
	```
	
3. Create cordova project.

	```
	cordova prepare || cordova prepare
	```
	
	The "|| cordova prepare" is necessary because of a bug in cordova that causes some packages not to install on the first prepare. This is likely due to a dependency issue.

4. Check that all cordova dependencies have been installed.

	```
	cordova requirements
	```
	
	This should print out that all the dependencies are met, but if some are not, install the corresponding dependency. For example, you may need to download [Android Studio and SDK Tools](https://developer.android.com/studio/index.html) or adjust your PATH and JAVA_HOME variables. Getting this right is the trickiest part of building the project.
	
5. Once all requirements are met, build the cordova project to generate an Android Studio project and build an APK file.

	```
	cordova build
	```

6. You can now use either an Android Emulator or a physical device to run and test your code. Follow the steps below to put the application on your emulator/device:
	
## Testing and Debugging with an Emulator

1. Follow the steps in "Building" to ensure you can build the project successfully.
2. Download [Android Studio and SDK Tools](https://developer.android.com/studio/index.html) and [Android File Transfer](https://www.android.com/filetransfer/) if you don't already have them. 
3. Open Android Studio. Select "Start a New Android Studio Project" and create a dummy project. The goal here is not necessarily to use the project you create, but simply to create a new emulator, because Android Studio only allows you to open the emulator manager from within the Project View. Select "Phone and Tablet" and "API 23: Android 6.0 (Marshmallow)", and hit "Next". Select "Add No Activity" and "Finish". Android studio will create a new project.
4. You will likely see this menu in the top right corner: ![](readme_resources/android_studio_menu.png) Select the "AVD Manager" (Android Virtual Device Manager) icon that is circled in red. This will open the Android Virtual Device Manager in a new window.
5. Click "Create New Virtual Device". Select "Tablet" on the left side column. Select "10.1 WXGA (Tablet)" for hardware. For software, select "Marshmallow" and hit "Next". Select "Landscape" for startup orientation, and click "Finish".
6. Now you should be able to run `cordova emulate` and the emulator will automatically power on and run your application.

## Testing and Debugging with a Physical Device
1. Follow the steps in "Building" to ensure you can build the project successfully.
2. Download [Android Studio and SDK Tools](https://developer.android.com/studio/index.html) and [Android File Transfer](https://www.android.com/filetransfer/) if you don't already have them. 
3. Make sure developer mode is ON on your device. [Here](https://www.techadvisor.co.uk/how-to/google-android/34-useful-things-you-can-do-in-android-developer-options-new-3590299/) is how to do that, and information on what developer mode is for.
4. Connect your device. You will be prompted on your device to allow your computer access to files on the device and to allow usb debugging. Click yes for both.
5. You should now be able to run `cordova run`, and the tablet will be loaded with your application and automatically run it.

## Makefile - After Initial Setup

Once you have completed the initial setup outlined in "Building" and "Testing and Debugging with an Emulator" or "Testing and Debugging with a Physical Device," you can use the Makefile included in the repository to speed up and make building easier. Below is a table of the available make options and what they do.

|Command|Description|
|------------------|-----------|
|`make clean`|Removes all the files generated when the build process occurs. These are all untracked files, so it does not damage the repository. Those files will need to be recompiled to be generated again.|
|`make quick_build`|Runs the build routine to generate a new APK file. This is basically `cordova build`.|
|`make full_build`|Runs the full build routine, installing all npm packages, bower packages, and cordova packages, then running `cordova build`.|
|`make clean_build`|Removes all generated files then runs full build routine. Basically `make clean` followed by `make full_build`.|
|`make quick_emulate`|Runs the build routine and attempts to run the application on an emulator. This is basically `cordova emulate`.|
|`make full_emulate`|Runs the full build routine, installing any npm packages, bower packages, and cordova packages, then running `cordova emulate`.|
|`make clean_emulate`|Removes all generated files then runs full emulate routine. Basically `make clean` followed by `make full_emulate`.|
|`make quick_run`|Runs the build routine and attempts to run the application on a connected tablet. Will run on an emulator if no physical tablet found. This is basically `cordova run`.|
|`make full_run`|Runs the full build routine, installing any npm packages, bower packages, and cordova packages, then running `cordova run`.|
|`make clean_run`|Removes all generated files then runs full run routine. Basically `make clean` followed by `make full_run`.|

## Methodologies
At the beginning of the semester, we will create issues in GitHub for each feature to be added and assign priority and assignee for each issue. Each week we will decide which issues we will strive to complete and close during that week.

### Workflow
1. Choose an issue to work on.
2. Get current with origin master. `git pull origin master`
3. Work issue. Commit often.
4. When issue is solved, rebase on master and squash commits. Include issue number in commit message. e.g.:
    
    ```
    Created new dropdown menu.
    Issue: 12345
    ```
    
5. Close issue.
6. At each weekly meeting we will discuss what issues we closed, how the solutions work, and any new issues to be created.