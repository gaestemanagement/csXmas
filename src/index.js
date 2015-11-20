'use strict';

const angular = require('angular'),
    uiRouter = require('angular-ui-router');

const articledetail = require('./articledetail'),
    articles = require('./articles'),
    cart = require('./cart'),
    categories = require('./categories'),
    chat = require('./chat'),
    mainnavigation = require('./mainnavigation');

const eshop = angular.module('eshop', [
  articledetail,
  articles,
  cart,
  categories,
  chat,
  mainnavigation,
  uiRouter
]);

eshop.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/articles');

  $stateProvider.
    state('about', {
      url: '/about',
      templateUrl: '/src/about/about.html'
    }).
    state('articles', {
      url: '/articles',
      templateUrl: '/src/articles/articles.html'
    }).
    state('articledetail', {
      url: '/articles/:id',
      templateUrl: '/src/articledetail/articleDetail.html'
    }).
    state('categories', {
      url: '/categories',
      templateUrl: '/src/categories/categories.html'
    }).
    state('cart', {
      url: '/cart',
      templateUrl: '/src/cart/cart.html'
    }).
    state('support', {
      url: '/support',
      templateUrl: '/src/chat/chat.html'
    });
});
