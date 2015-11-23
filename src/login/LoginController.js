'use strict';

const credentials = require('../shared/credentials'),
    database = require('../shared/database');

const LoginController = function ($rootScope, $state) {
  const storageEmailAddress = window.localStorage.getItem('login-email');

  if (storageEmailAddress !== undefined && storageEmailAddress !== 'undefined') {
    this.emailAddress = storageEmailAddress;
  }

  this.send = function () {
    /* eslint-disable no-console */
    console.log(`login.send started`);
    /* eslint-enable no-console */
    if (this.isValidEmail()) {
      if (this.saveEmail === true) {
        window.localStorage.setItem('login-email', credentials.emailAddress);
      }
      if (this.saveEmail === false) {
        window.localStorage.removeItem('login-email');
      }
      $state.go('menuchoice');
    }
  };

  this.isEmpty = function () {
    return this.emailAddress === '';
  };

  this.isValidEmail = function () {
    database.validateEmail((err, loginreq) => {
      if (err) {
        /* eslint-disable no-console */
        console.log(`Uh-oh, something went wrong... ${err.message}`);
        /* eslint-enable no-console */
        return false;
      }

      $rootScope.$apply(() => {
        this.loginstate = loginreq.state;
        /* eslint-disable no-console */
        console.log('loginstate= ' + this.loginstate);
        /* eslint-enable no-console */
        if (this.loginstate === 0) {
          this.isValidEmail = false;
          /* eslint-disable no-console */
          console.log(`set errorState true`);
          /* eslint-enable no-console */
          return false;
        }
        credentials.emailAddress = this.emailAddress;
        credentials.username = loginreq.name;
        credentials.anrede = `Liebe(r) ${loginreq.name}`;
        return true;
      });
    });
  };
};

module.exports = LoginController;
