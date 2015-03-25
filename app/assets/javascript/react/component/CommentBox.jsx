/** @jsx React.DOM */

var React = require('react');
var CommentList = require('./CommentList');
var CommentForm = require('./CommentForm');

var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this)
    });
  },
  handleCommentSubmit: function(comment) {
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    $.ajax({
      url: this.props.url,
      type: 'POST',
      dataType: 'json',
      data: comment,
      success: function() {
        this.setState({data: data});
      }.bind(this)
    })
  },
  componentWillMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {  
    return (  
      <div className="commentBox">  
        <h1>{'First · Second'}</h1>
        <CommentList data={this.state.data} />
        <CommentForm 
          onCommentSubmit={this.handleCommentSubmit}
        />
      </div>  
    );  
  }  
});

module.exports = CommentBox;