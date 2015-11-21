'use strict';

const Credentials = function () {
  this.emailAddress = '';
  this.username = '';
  this.anrede = '';
};

Credentials.prototype.logout = function () {
  this.emailAddress = '';
  this.username = '';
  this.anrede = '';
};

Credentials.prototype.login = function () {

};

Credentials.prototype.getUsername = function () {
  return this.username;
};

module.exports = new Credentials();
