'use strict';

const angular = require('angular');

const LoginController = require('./LoginController');

const login = angular.module('csXmas.login', []);

login.controller('LoginController', LoginController);

module.exports = login.name;
