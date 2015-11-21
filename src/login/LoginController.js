'use strict';

const credentials = require('../shared/credentials');

const LoginController = function ($state) {
  this.emailAddress = window.localStorage.getItem('login-email');

  this.send = function () {
    credentials.emailAddress = this.emailAddress;
    credentials.username = this.emailAddress;
    credentials.anrede = `Liebe(r) ${this.emailAddress}`;
    this.emailAddress = '';
    window.localStorage.setItem('login-email', credentials.emailAddress);
    $state.go('menuchoice');
  };

  this.isEmpty = function () {
    return this.emailAddress === '';
  };
};

module.exports = LoginController;
