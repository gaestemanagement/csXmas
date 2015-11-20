'use strict';

const ChatController = function () {
  this.message = '';
  this.messages = [];

  this.send = function () {
    const timestamp = Date.now();
    const text = this.message;

    this.messages.unshift({ timestamp, text });

    this.message = '';
  };
};

module.exports = ChatController;
