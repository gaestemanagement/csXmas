'use strict';

const angular = require('angular');
const uiRouter = require('angular-ui-router');

const login = require('./login');

const csXmas = angular.module('csXmas', [
  login,
  uiRouter
]);

csXmas.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');

  $stateProvider.
  state('login', {
    url: '/login',
    templateUrl: '/src/login/login.html'
  });
});
