'use strict';

const request = require('request');

const credentials = require('../shared/credentials');

const get = function (path, para, callback) {
  let server = '';

  // server = 'http://localhost:3000';
  server = 'http://192.168.0.4:57773/csp/user/cs/xmasapi';
  request.get(`${server}${path}?email=${credentials.emailAddress}${para}`, (err, res) => {
    if (err) {
      return callback(err);
    }

    callback(null, JSON.parse(res.body));
  });
};

/* eslint-disable no-unused-vars */
const post = function (path, content, callback) {
  let server = '';

  // server = 'http://localhost:3000';
  server = 'http://192.168.0.4:57773/csp/user/cs/xmasapi';

  const opts = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
    uri: `${server}${path}?email=${credentials.emailAddress}`,
    body: content
  };

  request(opts, (err, res, body) => {
    if (err) {
      return callback(err);
    }

    callback(null, JSON.parse(res.body), body);
  });
};
/* eslint-enable no-unused-vars */

const database = {
  getMenu (callback) {
    get('/menu', '', callback);
  },

  getMenuChoice (callback) {
    get('/menuChoice', '', callback);
  },

  postMenuChoice (choice, callback) {
    get('/menuChoiceSet', `&choice=${choice}`, callback);
  }
};

module.exports = database;
