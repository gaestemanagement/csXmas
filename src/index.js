'use strict';

const angular = require('angular');
const uiRouter = require('angular-ui-router');

const login = require('./login'),
    menuchoice = require('./menuchoice'),
    menuchoiceconfirm = require('./menuchoiceconfirm');

const csXmas = angular.module('csXmas', [
  login,
  menuchoice,
  menuchoiceconfirm,
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
  }).
  state('menuchoiceconfirm', {
    url: '/menuchoiceconfirm',
    templateUrl: './src/menuchoiceconfirm/menuchoiceconfirm.html'
  });
});
