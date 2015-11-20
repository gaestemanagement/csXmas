'use strict';

const angular = require('angular');

const ChatController = require('./ChatController'),
    receivedTime = require('./receivedTime');

const chat = angular.module('eshop.chat', []);

chat.controller('ChatController', ChatController);
chat.filter('receivedTime', receivedTime);

module.exports = chat.name;
