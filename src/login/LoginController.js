'use strict';

const LoginController = function () {
  this.emailAddress = '';
  this.send = function () {
    this.emailAddress = '';
  };

  this.isEmpty = function () {
    return this.emailAddress === '';
  };
};

module.exports = LoginController;
