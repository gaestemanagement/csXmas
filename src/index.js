'use strict';

const angular = require('angular');
const uiRouter = require('angular-ui-router');

const login = require('./login'),
    menuchoice = require('./menuchoice');

const csXmas = angular.module('csXmas', [
  login,
  menuchoice,
  uiRouter
]);

csXmas.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');

  $stateProvider.
  state('login', {
    url: '/login',
    templateUrl: './src/login/login.html'
  }).
  state('menuchoice', {
    url: '/menuchoice',
    templateUrl: './src/menuchoice/menuchoice.html'
  });
});
