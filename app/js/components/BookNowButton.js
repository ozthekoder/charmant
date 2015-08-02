var React = require('react');

var BookNowButton = React.createClass({
  componentDidMount: function(){
  },
  render: function(){
    return (
      <li className="bookNowButton"><a type="button" role="button">Book Now</a></li>
    )
  }
});

module.exports = BookNowButton;
