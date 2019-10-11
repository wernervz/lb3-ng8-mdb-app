# Loopback 3 + Angular 8 + Material Design Started App

This collection of frameworks provide you with an established pattern to deploy and run a Javascript application on.  The environment consist of 3 primary frameworks to get you developng quickly.

1. [Loopback v3](https://loopback.io/lb3)

    Loopback acts as the backend part of the environment and was selected because of the builtin none-functional capabilities it provides.  These capabilities include security, api first, connectors and project structure.

2. [Angular v8](https://angular.io/)

    Angular acts as the frontend part of the environment and was selected for it security, speed, size and easy of development.

3. [Material Design for Bootstrap](https://mdbootstrap.com/docs/angular/)

    To provide a rich user experience, Material Design for Bootstrap is included in the environment.


This environment combines both the backend and frontend into a single environment.  When you run the application, the backend will startup and serve the frontend for you.  Browsersync is used to update any changes in the browser as they are made and Nodemon is used for the backend to reflect any changes as soon as they are made.

The environment supports both MacOS as well as Windows.

VSCode was used for the development and testing of the framework.

## Pre-requisits

1. Install NodeMon using `npm install -g nodemon`.
2. Install the Angular Client using `npm install -g @angular/cli`.

## Setup

1. Clone or download the repo from GitHub.
2. Run `npm install`.  This will install both the backend and frontend requirements.
3. Run `npm run develop` will compile the Angular client, start the Loopback server and load the browser.

### Notes on Windows

1. Windows will sometimes take longer to compile the Angular frontend.  You might need to increase the sleep time to 60 seconds in the package.json `develop` scripts.  Modify the value 15000 to 60000.  Alternatively you can also set a SLEEP environment variable to the value you want to sleep.
2. You can also modify the port used by the application.  The default is 3000 and 3001 for BroswerSync.  Modify the package.json or set the environment variables PORT and BPORT respectively.

