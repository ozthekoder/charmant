var React = require('react');
var DataProxy = require('../DataProxy');
var BookNowButton = require('./BookNowButton');

var dataProxy = new DataProxy();

var Navigation = React.createClass({
  getInitialState: function(){
    return {
      source : 'navigation',
      list : []
    }
  },
  componentDidMount: function(){
    dataProxy.fetchSource(this.state.source).then((data)=>{
      this.setState({
        list : data.NAVIGATION
      })
    });
  },
  render: function(){
    let listItems = this.state.list.map(item =>{
      return (<li><a href={'#' + item.PATH}>{item.LINKTITLE}</a></li>)
    })

    listItems.push(<BookNowButton/>);
    return (
      <div className="navigation"><ul>{listItems}</ul></div>
    )
  }
});

module.exports = Navigation;
