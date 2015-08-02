var React = require('react');
var DataProxy = require('../DataProxy');

var dataProxy = new DataProxy();

var Footer = React.createClass({
  getInitialState: function(){
    return {
      source : 'footer',
      list : []
    }
  },
  componentDidMount: function(){
    dataProxy.fetchSource(this.state.source).then((data)=>{
      this.setState({
        list : data.LIST
      })
    });
  },
  render: function(){
    let listItems = this.state.list.map(item =>{
      return (<li>{item}</li>)
    })

    return (
      <div className="footer"><ul>{listItems}</ul></div>
    )
  }
});

module.exports = Footer;
