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

## Testing and Debugging with an Emulator

## Testing and Debugging with a Physical Device

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