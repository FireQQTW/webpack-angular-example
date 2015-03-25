/** @jsx React.DOM */

'use strict'

var React = require('react');
var CommentBox = require('./CommentBox');

module.exports = function() {

  // render Component 
  React.render(  
    <CommentBox url="assets/public/comments.json" pollInterval={2000} />,
    document.getElementById("example")
  );  
}