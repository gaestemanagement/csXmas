'use strict';

const credentials = require('../shared/credentials'),
    database = require('../shared/database');

const MenuChoiceConfirmController = function ($rootScope, $state) {
  if (credentials.emailAddress === '') {
    return $state.go('login');
  }
  this.menuitems = [];
  this.choices = [ -1, -1, -1, -1 ];
  this.anrede = credentials.anrede;
  this.isLoading = true;

  database.getMenu((err, menureq) => {
    if (err) {
      $rootScope.$apply(() => {
      });
      /* eslint-disable no-console */
      return console.log(`Uh-oh, something went wrong... ${err.message}`);
      /* eslint-enable no-console */
    }

    $rootScope.$apply(() => {
      this.menuitems = menureq.menu;
    });
  });

  database.getMenuChoice((err, menureq) => {
    if (err) {
      $rootScope.$apply(() => {
      });
      /* eslint-disable no-console */
      return console.log(`Uh-oh, something went wrong... ${err.message}`);
      /* eslint-enable no-console */
    }

    $rootScope.$apply(() => {
      this.choices[1] = menureq.course1;
      this.choices[2] = menureq.course2;
      this.choices[3] = menureq.course3;
      this.isLoading = false;
    });
  });
};

module.exports = MenuChoiceConfirmController;
