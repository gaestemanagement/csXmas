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
          /* eslint-disable no-console */
          console.log('Login OK');
          /* eslint-enable no-console */

          credentials.username = loginreq.name;
          credentials.anrede = `Liebe(r) ${loginreq.name}`;
          if (this.saveEmail === true) {
            window.localStorage.setItem('login-email', credentials.emailAddress);
          } else {
            window.localStorage.removeItem('login-email');
          }
          $state.go('menuchoice');
        } else {
          /* eslint-disable no-console */
          console.log('Login not OK');
          /* eslint-enable no-console */
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
