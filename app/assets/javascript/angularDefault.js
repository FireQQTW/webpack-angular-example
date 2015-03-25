// foo.js
module.exports = function () {
  require('imports?require=>global.ngReqShim!ng-dialog');

  var app = angular.module('myApp', ['ngDialog']);
  
  app.controller('ctroe', function(){
  });
};