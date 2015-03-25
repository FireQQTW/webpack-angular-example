/** @jsx React.DOM */

'use strict'

var React = require('react');

module.exports = function() {
  var Counter = React.createClass({
    getInitialState: function() {
      return {count: this.props.initialCount};
    },

    handleClick: function() {
      this.setState({count: this.state.count + 1});
    },

    render: function() {
      return <div onClick={this.handleClick}>{this.state.count}</div>
    }
  });

  // render Component 
  React.render(  
    <Counter initialCount={7} />,
    document.getElementById("buttonClick")
  );  
}