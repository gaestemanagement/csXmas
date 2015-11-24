'use strict';

const credentials = require('../shared/credentials'),
    database = require('../shared/database');

const LoginController = function ($rootScope, $state) {
  this.emailAddress = window.localStorage.getItem('login-email');
  this.isNotValidEmailAddress = false;
  /* eslint-disable no-console */
  console.log(window.localStorage.getItem('login-email'));
  /* eslint-enable no-console */

  this.send = function () {
    credentials.emailAddress = this.emailAddress;
    database.validateEmail((err, loginreq) => {
      if (err) {
        /* eslint-disable no-console */
        console.log(`Uh-oh, something went wrong... ${err.message}`);
        /* eslint-enable no-console */
        return false;
      }

      $rootScope.$apply(() => {
        if (loginreq.state !== 0) {
          credentials.username = loginreq.name;
          credentials.anrede = loginreq.salutation;
          if (this.saveEmail === true) {
            window.localStorage.setItem('login-email', credentials.emailAddress);
          } else {
            window.localStorage.removeItem('login-email');
          }
          $state.go('menuchoice');
        } else {
          this.isNotValidEmailAddress = true;
        }
      });
    });
  };

  this.isEmpty = function () {
    return this.emailAddress === '';
  };
};

module.exports = LoginController;
