## SYNOPSIS

This game is my first project in General Assembly's Web Development Immersive Course. This is a quiz trivia style mcq, fill in the blanks, Q&A game APP for single or double players to pit their skills, possibly even online if can be done, the content materials are to be original from educators, for students to practise on using simple CSS and Javascript.


## GENERAL APP FEATURES

Features AUTH0 login registration for single/double players, embedded midi/mp3, possibly weave some animations included.
Parent Email & Mobile Communication. It currently runs on desktop web-browser, eventually to be on any desktop or mobile browser and supports both keyboard (arrow keys) and touchscreen (swipe) inputs.


## CODE DESCRIPTION

MCQ Page - Use of express.js to host local, refer package.json.  For single page mcq, used button type mcq to render questions and upon click supply score, linked to quiz_config.js and quiz_functions.js.    


## MOTIVATION

I thought of replicating the user experience of a elementary school student taking an assessment practice through an app where students will be quizzed on a series of practices either as a single user mode or through dual-users mode in an interactive game-like mode, if permitted multi-users real-time online. The app can then form a platform template for educators to use for distribution through multiple platforms.


## INSTALLATION

Deployed a single page to Heroku available online.


## API REFERENCE

No API works done yet.


## TESTS

No testing done yet.


## CONTRIBUTORS

Most welcome. If you like the app and will like to contribute, you can fork this repo and follow the instructions below.

On your terminal:

* Clone the forked repo into your local drive
* git clone <url of forked repo>
* cd Project1
* Install dependencies
* npm install
* Build
* npm run start
* After this, drop me a pull request


## LICENCE

ISC


## WORK IN PROGRESS

Project 1 (1 Page Front End)
Completed One Page MCQ on 10 Dec 2015 pending review through GITHUB
Updated readme.md to proper template format for easy reference.

Project 2 (1 Page Back End)
Removed and re-organized unnecessary files as per review (Zell)
Refactor code and build on Project 1 to host data backend and use front end input to achieve the same result.


## COOL FEATURES TO INCORPORATE - INSPIRATION GAME 2048 @YONGJUN21

* CSS transition, keyframes & transform
* Events listens like keypress & ontouch allow user to interact with the app.
* Transitionend listeners and a async callbacks handler.
* Use of a SVG mask
* Inclusion of a viewport meta tag to ensure app display properly across different platforms.
* Javescript's native touch interface does not interpret movements on the touchscreen, to add code swipe detector
* Incorporate favicon.


## COOL FEATURES TO INCORPORATE - INSPIRATION GAME SCRABBLE @CAALBERTS

* Scrabble board as part of game.  
* User interaction created using Dragula drag and drop package
* Built scripts to read words from the board and check against Sowpods dictionary
* Automated testing and deployment workflow with GitHub, Travis and Heroku

## COOL TOOLS & LIBRARIES TO INCORPORATE - INSPIRATION @YONGJUN21 @CAALBERTS

*   Babelify
*   Browserify
*   brfs
*   watch-spawn
*   lodash
*   Travis CI
*   Dragula

......................................................................................................
