# SE_Assignment


This repository contains the code for assignment to develop User Registration Form And Storing it MongoDB Database. IP Restriction is done using Google Recaptcha after 3 registraions from same IP. The restriction is lifted after 24 hours of inactivity using TTL in mongoDB.

### Tech



* HTML5 - HTML enhanced for web apps!
* Twitter Bootstrap - great UI boilerplate for modern web apps
* node.js  ^13.0.1 - evented I/O for the backend
* Express  ^4.16.1 - fast node.js network app framework 
* MongoDB  ^3.4.5 - the NoSQL DB
* Mongoose ^5.9.7 - MongoDB ORM
* Bcrypt ^4.0.1 - Password Hashing
* Axios ^0.19.2 - Http Request for Captcha verification
* EJS ^3.0.2 - Templating Engine

### Development



Open your favorite Terminal and run these commands.

First Tab: - Start the mongodb daemon
```
$ mongod
```

Second Tab:- Install node modules(only once reqd)
```
$ npm install
```
Third: Running the app
```
$ npm start
```
The development server will run on http://localhost:3000/

License
----

MIT
