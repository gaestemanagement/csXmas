'use strict';

const credentials = require('../shared/credentials');

const LoginController = function ($state) {
  this.saveEmail = true;
  this.emailAddress = window.localStorage.getItem('login-email');

  this.send = function () {
    credentials.emailAddress = this.emailAddress;
    credentials.username = this.emailAddress;
    credentials.anrede = `Liebe(r) ${this.emailAddress}`;
    if (this.saveEmail === true) {
      window.localStorage.setItem('login-email', credentials.emailAddress);
    }
    if (this.saveEmail === false) {
      window.localStorage.removeItem('login-email');
    }

    $state.go('menuchoice');
  };

  this.isEmpty = function () {
    return this.emailAddress === '';
  };
};

module.exports = LoginController;
