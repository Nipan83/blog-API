'use strict'

var app = require('../app')
var request = require('supertest')
var superagent = require('superagent')
var agent = superagent.agent()
var mocha = require('mocha')
var jwt = require('jsonwebtoken')
var expect = require('chai').expect
var describe = mocha.describe
var it = mocha.it


describe('login', function () {
  it('Generates token for user for any email and password', function (done) {
    request(app)
            .post('/login')
            .send({ email: 'nipandas@gmail.com', password: '12345' })
            .expect(200, done)
            
  })
})

describe('login', function () {
  it('Reject request if email and password is not available', function (done) {
    request(app)
            .post('/login')
            .expect(404)
            .expect(/No user found./, done)
  })
})

describe('login', function () {
  it('Reject request if only email is available', function (done) {
    request(app)
            .post('/login')
            .send({ email: 'nipandas@gmail.com' })
            .expect(404)
            .expect(/password is not given/, done)
  })
})

describe('login', function () {
  it('Reject request if only password is available', function (done) {
    request(app)
            .post('/login')
            .send({ password: '12345' })
            .expect(404)
            .expect(/No user found./, done)
  })
})

describe('register', function () {
  it('user registration', function (done) {
    request(app)
            .post('/register')
            .send({ email: 'nipandas8@gmail.com', password: '12345', username: 'nipan2', blogURL:'github.com/nipan2', firstname:'nipan', lastname:'das' })
            .expect(200, done)
            
  })
})


describe('home', function () {
  it('Should show the home page', function (done) {
            request(app)
      .get('/')
      .expect(200, done)
  })
})
