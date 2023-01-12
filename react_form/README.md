# React Form

The projects consists of a form split into two containers with all of the input types included. 
You are able to submit the form and send a POST request. Validation is included as well as toast messages and unit tests.

## Table of Contents
- [Getting Started](#getting_started)
- [Installing](#installing)
- [Usage](#usage)
- [Issues that might arise](#issues_that_might_arise)

## Getting Started
Clone the project from this github repository

## Installing

Once you have cloned the repository, run npm install. After the node_modules folder is
created and the installation is done, you can run npm start. For the Tests you can run npm test.

## Usage
You would have to create your own post bin service, since they expire in 30 minutes.

You can do that from here: https://www.toptal.com/developers/postbin/
After you have the URL to the bin, you have to go to the useForm.jsx file and replace it
with the url on line 38.

## Issues that might arise

If you receive and error in the console about the CORS Policy not being allowed, please
open up a browser with CORS Policy disabled, as I am unable to fix it from the client-side.

You can do that by Start -> Run -> input this | chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security | in the field and click Enter
It will open a separate Chrome Browser with disabled CORS and you will be able to make the request and check the information in the post bin.

