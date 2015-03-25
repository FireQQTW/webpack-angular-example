/** @jsx React.DOM */

var React = require('react');
var converter = new Showdown.converter();


var Comment = React.createClass({
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} /> 
      </div>
    );
  }
});

module.exports = Comment;