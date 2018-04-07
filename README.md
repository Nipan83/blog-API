# Node BLOG REST API

This is a simple REST API server implementation built on top `Node.js` and `Express.js` with `Mongoose.js` for `MongoDB` integration. Authentication is handled using `JWT` integration.

## Get Started:

`git clone https://github.com/Nipan83/blog-API.git`

`cd blog-API`

## Running project

## Manual

You need to have Node.js and npm installed.

## Run server

```sh
	# Install all dependencies
	npm install

	# Start the server
	npm start

```

## Base URI for making requests

### Running locally

`http://localhost:3000/`

### Heroku 

`https://nipan-blogapi.herokuapp.com/`

## RUN THE APIs

Check the APIs using [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)

## Routes

### POST Register

`http://localhost:3000/register` <br />

or <br />

`https://nipan-blogapi.herokuapp.com/register`

This route allows user to register herself on the platform with basic information <br />

▪ `username`, `password`, `firstname`, `lastname`, `blogURL` <br />

All you need to do is pass the informations in the request body in key value pair 

![alt text](https://i.imgur.com/yEhygsc.png)

### POST Login

`http://localhost:3000/login` <br />

or <br />

`https://nipan-blogapi.herokuapp.com/login` <br />

This route allows user to login herself on the platform with basic information <br />

▪ `email` and `password` <br />

All you need to do is pass the informations in the request body in key value pair 

A `JWT TOKEN` will be returned which will be used for further using the API.

The token should be placed in header `key` as `x-access-token` and `value` will be the token.

![alt text](https://i.imgur.com/FHMV8e9.png)

### POST Blogost

`http://localhost:3000/blogpost` <br />
or <br />
`https://nipan-blogapi.herokuapp.com/blogpost` <br />

This route allows user to create a blog post with following parameters <br />

▪ Title, content <br />

Authentication is handled here using `JWT`

![alt text](https://i.imgur.com/XURrohi.png) <br />
<br />
![alt text](https://i.imgur.com/I7u6EaQ.png)


### PUT follow/{username}

`http://localhost:3000/follow/{username}`<br />
or <br />
`https://nipan-blogapi.herokuapp.com/follow/{username}`<br />

This route allows you to follow new users <br />

![alt text](https://i.imgur.com/DOA5RVB.png)

### GET feed

`http://localhost:3000/feed` <br />
or <br />
`https://nipan-blogapi.herokuapp.com/feed` <br />

This route returns all blog posts of users you follow
<br />

![alt text](https://i.imgur.com/6e14y8D.png)

`NOTE: For viewing own blog post user have to follow himself.`



### GET users

`http://localhost:3000/getuser` <br />
or <br />
`https://nipan-blogapi.herokuapp.com/getuser`<br />

This routes returns all the users registered.

This route is for monitoring purpose.

Token will also be needed here.

## TESTING

```sh

	# TESTING of APIs
	npm test

	# NOTE: Since email field is unique for registering a user. So register testcase may fail after running `npm test` two times.

	# To prevent the error, open test/test.js and change the email value to a new emailId.

```


## AUTHOR

Created and Maintained by [@Nipan83](https://github.com/Nipan83) - nipandas83@gmail.com

