# Loopback 3 + Angular 8 + Material Design Started App

This collection of frameworks provide you with an established pattern to deploy and run a Javascript application.  The environment consists of 3 primary frameworks to get you developing quickly.

1. [Loopback v3](https://loopback.io/lb3)

    Loopback was selected to act as the backend part of the environment for its builtin none-functional capabilities it provides.  These capabilities include security, API first, connectors, and project structure.

2. [Angular v8](https://angular.io/)

    Angular acts as the frontend part of the environment and was selected for its security, speed, size, and ease of development.

3. [Material Design for Bootstrap](https://mdbootstrap.com/docs/angular/)

    Material Design for Bootstrap is included in the environment to provide a rich user experience.

This environment combines both the backend and frontend into a single environment.  When you run the application, the backend will start and serve the frontend for you.  BrowserSync updates the browser with changes as they are made.  Nodemon is used for the backend to reflect any changes as soon as they are made.

The environment supports both macOS as well as Windows.

Development and testing of the framework was done in VSCode.

## Pre-requisits

1. Install NodeMon using `npm install -g nodemon`.
2. Install the Angular Client using `npm install -g @angular/cli`.

## Setup

1. Clone or download the repo from GitHub.
2. Run `npm install`.  This will install both the backend and frontend requirements.
3. Run `npm run develop` will compile the Angular client, start the Loopback server, and load the browser.

### Notes on Windows

* Windows will sometimes take longer to compile the Angular frontend.  You might need to increase the sleep time to 60 seconds in the package.json `develop` scripts.  Modify the value 15000 to 60000.  Alternatively, you can also set a SLEEP environment variable to the value you want to sleep.
* You can also modify the port used by the application.  The default is 3000 and 3001 for BroswerSync.  Modify the package.json or set the environment variables PORT and BPORT, respectively.
* Browser-sync will try and start Chrome when it loads the application into the browser.  The browser is currently set to a macOS part and must be modified to the Windows path.

## Users and Access Control

Part of the value to this environment is that comes with authentication already configured plus integration with the client.  This is achieved by using the built-in [Access Control in Loopback](https://loopback.io/doc/en/lb3/Authentication-authorization-and-permissions.html).  

When the server starts up the first time, two users will automatically be created for you.

1. An Administrator user with user id `admin` and password `@dm1n!`.  The admin user will be added to the admin role.
2. A Guest user with user id `guest` and password `p@ssword`.  This user will not belong to any roles.

You can modify the passwords in the `server\boot\init-api-users.js` file.

The frontend support authentication with a pre-built authentication model that consist of a login form, authentication gaurd and a service.  The service contains all the logic to login and logout as well as methods to make authenticated calls to the Loopback API.

