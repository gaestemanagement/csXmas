'use strict';

const angular = require('angular');

const MenuChoiceConfirmController = require('./MenuChoiceConfirmController');

const menuchoiceconfirm = angular.module('csXmas.menuchoiceconfirm', []);

menuchoiceconfirm.controller('MenuChoiceConfirmController', MenuChoiceConfirmController);

module.exports = menuchoiceconfirm.name;
