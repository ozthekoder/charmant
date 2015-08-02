var React = require('react');

var SocialButton = React.createClass({
  componentDidMount: function(){
  },
  render: function(){
    let style = {
      backgroundImage : "url(/content/" + this.props.type + ".png)"
    }
    return (
      <a href={this.props.url} className="socialButton" style={style}></a>
    )
  }
});

module.exports = SocialButton;
