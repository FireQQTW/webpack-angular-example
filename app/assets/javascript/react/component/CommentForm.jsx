/** @jsx React.DOM */

var React = require('react');

var CommentForm = React.createClass({
  handleSubmit: function() {
    var author = this.refs.author.getDOMNode().value.trim();
    var text = this.refs.text.getDOMNode().value.trim();
    this.props.onCommentSubmit({author: author, text: text});
    this.refs.author.getDOMNode().value = '';
    this.refs.text.getDOMNode().value = '';
    return false;
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <div className="ui input">
          <input type="text" placeholder="名字" ref="author" />  
        </div>
        <div className="ui input">
          <input type="text" placeholder="說些什麼" ref="text" />  
        </div>
        <input className="ui button" type="submit" value="送出" />  
      </form>
    );
  }
});

module.exports = CommentForm;