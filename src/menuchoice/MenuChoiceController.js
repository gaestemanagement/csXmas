'use strict';

const credentials = require('../shared/credentials'),
    database = require('../shared/database');

const MenuChoiceController = function ($rootScope, $state) {
  if (credentials.emailAddress === '') {
    return $state.go('login');
  }

  this.menuitems = [];
  this.choices = [ -1, -1, -1, -1 ];
  this.anrede = credentials.anrede;
  this.isLoading = true;

  this.submitChoice = function () {
    const choice = (`{ course1: "${this.choices[1]}", course2: "${this.choices[2]}", course3: "${this.choices[3]}" }`);

    database.postMenuChoice(choice, (err, choiceresp) => {
      if (err) {
        $rootScope.$apply(() => {
        });
        /* eslint-disable no-console */
        return console.log(`Uh-oh, something went wrong... ${err.message}`);
        /* eslint-enable no-console */
      }

      $rootScope.$apply(() => {
        /* eslint-disable no-console */
        console.log(`${choiceresp}`);
        /* eslint-enable no-console */
        return $state.go('menuchoiceconfirm');
      });
    });
  };

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

module.exports = MenuChoiceController;
