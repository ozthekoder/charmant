var React = require('react');
var $ = require('jquery');
require('malihu-custom-scrollbar-plugin')($);

var ContentBox = React.createClass({
  componentDidMount: function() {
    $('.scrolled-content').mCustomScrollbar({
        theme: "dark",
        axis: "y",
        scrollInertia: 100,
        alwaysShowScrollbar : true,
        autoDraggerLength : false,
        scrollButtons: {
          enable: true
        }
    });
  },
  render: function(){
    return (
      <div className="content-box">
        <div className="container">
          <h2>{this.props.headline}</h2>
          <div className="headline-break"></div>
          <div className="scrolled-content">
            <div>{this.props.content}</div>
          </div>
          <div className="book-now-callout"><a>Book Now ></a></div>
        </div>
      </div>
    )
  }
});

module.exports = ContentBox;
