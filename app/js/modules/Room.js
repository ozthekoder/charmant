var React = require('react');
var DataProxy = require('../DataProxy');

var dataProxy = new DataProxy();

var Room = React.createClass({
  componentDidMount: function(){
    this.fetchData().then((data)=>{
      this.setState({
        style: {
          backgroundImage : "url(" + data.SLIDES[0].IMAGE + ")"
        },
        title: data.PAGETITLE,
        keywords: data.META_KEYWORDS,
        description: data.META_DESCRIPTION
      })

      $('head meta[name="keywords"]').attr('content', this.state.keywords);
      $('head meta[name="description"]').attr('content', this.state.description);
      $('head title').html(this.state.title);
    });
  },
  fetchData: function(){
    return dataProxy.fetchSource(this.state.source);
  },
  getInitialState: function(){
    return { source: 'detail' };
  },
  render: function (){
    return (
      <div className="container page" style={this.state.style}>
      </div>
    );
  }
})

module.exports = Room;
