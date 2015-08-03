var React = require('react');
var $ = require('jquery');
require('malihu-custom-scrollbar-plugin')($);

var ContentBox = React.createClass({
  componentDidMount: function() {

    $(window).on('resize', this.onWindowResize);
    if($(window).height() < ( $('.content-box').height() + 190 )) {
      $('.content-box').height($(window).height() - 190);
      $('.scrolled-content').mCustomScrollbar({
          theme: "dark",
          axis: "y",
          scrollInertia: 100,
          alwaysShowScrollbar : true,
          autoDraggerLength : false,
          updateOnContentResize: true,
          scrollButtons: {
            enable: true
          }
      });


    } else {
      $('.content-box').css('height', 'auto');
      $('.scrolled-content').mCustomScrollbar('destroy');
    }
  },
  onWindowResize: function(e) {
    if($(window).height() < ( $('.content-box').height() + 190 )) {
      $('.content-box').height($(window).height() - 190);
      $('.scrolled-content').mCustomScrollbar({
          theme: "dark",
          axis: "y",
          scrollInertia: 100,
          alwaysShowScrollbar : true,
          autoDraggerLength : false,
          updateOnContentResize: true,
          scrollButtons: {
            enable: true
          }
      });


    } else {
      $('.content-box').css('height', 'auto');
      $('.scrolled-content').mCustomScrollbar('destroy');
    }
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
