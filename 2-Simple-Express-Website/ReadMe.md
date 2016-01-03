Simple Express Website
====

Simple Website & server that serves static webpages.  Contact Us page
sends email notification to developer via node-mailer.

---

###Getting Started###

There are two methods for getting started with this repo.  In both cases
you must input your mail credentials in secrets.js file.  Details below.

####Familiar with Git?#####
Checkout this repo, install dependencies, then start the server with the following:

```
	> git clone https://github.com/dougwells/nodejs-10-projects
	> cd 1-NodeJS-Simple-Web-Server
	> npm install
	> npm start
```

####Not Familiar with Git?#####
Click [here](https://github.com/dougwells/nodejs-10-projects.git) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
	> npm install
	> npm start
```

####Email Credentials####
You want to keep your email credentials safe so keep them in a file
called secrets.js and include secrets.js in .gitignore file so it
doesn't get saved to github.

If you use Gmail, you will need an application specific password.
See link below for details
https://support.google.com/accounts/answer/185833?hl=en&ctx=ch_DisplayUnlockCaptcha

```
secrets.js format
  module.exports = {
    user: 'abc@gmail.com',
    pass: '123abc',
    };
```
