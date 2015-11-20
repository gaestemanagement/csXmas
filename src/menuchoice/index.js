'use strict';

const angular = require('angular');

const MenuChoiceController = require('./MenuChoiceController');

const menuchoice = angular.module('csXmas.menuchoice', []);

menuchoice.controller('MenuChoiceController', MenuChoiceController);

module.exports = menuchoice.name;
