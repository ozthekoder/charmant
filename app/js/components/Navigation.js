var React = require('react');
var DataProxy = require('../DataProxy');
var BookNowButton = require('./BookNowButton');
var $ = require('jquery');

var dataProxy = new DataProxy();

var Navigation = React.createClass({
  getInitialState: function(){
    return {
      source : 'navigation',
      list : [],
      mobile: false
    }
  },
  componentDidMount: function(){
    if($(window).width() < 768)
      this.setState({
        mobile: true
      })
    $(window).on('resize', this.onWindowResize)
    dataProxy.fetchSource(this.state.source).then((data)=>{
      this.setState({
        list : data.NAVIGATION
      })
    });
  },
  onWindowResize: function(e){
    if($(window).width() < 768){
      this.setState({
        mobile: true
      });
    }
    else {
      this.setState({
        mobile: false,
        mobileNav: false
      });

      $('.hamburger').removeClass('active');
    }
  },
  toggleMobileNav: function(e){
    e.preventDefault();
    let target = $(e.target).closest('.hamburger');
    if(target.hasClass('active')) {
      $('.hamburger').removeClass('active');
      this.setState({
        mobileNav : false
      })
    }
    else {
      $('.hamburger').addClass('active');
      this.setState({
        mobileNav : true
      })
    }


  },
  render: function(){
    let listItems = this.state.list.map(item =>{
      return (<li><a href={'#' + item.PATH}>{item.LINKTITLE}</a></li>)
    })

    let style = {
      display: 'none'
    }

    if(this.state.mobile && this.state.mobileNav) {
      style.display = 'block';
    }

    return (
      <div className="navigation">
        <a onClick={this.toggleMobileNav} className="hamburger" href="#">
          <span></span>
        </a>
        <div style={style} className="mobile-navigation">
          <a onClick={this.toggleMobileNav} className="hamburger active" href="#">
            <span></span>
          </a>
          <ul className="mobile-nav-list">
            <li><a href="#/about">About the Hotel</a></li>
            <li><a href="#/rooms">Rooms</a></li>
            <li><a href="#/group-events">Group Events</a></li>
            <li><a href="#/neighborhood">Neighborhood</a></li>
            <li><a href="#/blog">Blog</a></li>
          </ul>
          <div className="signup-for-updates">
            Sign up for Updates >
          </div>
          <ul className="mobile-nav-list-small">
            <li><a href="#/careers">Careers</a></li>
            <li><a href="#/inquiries">Inquiries</a></li>
          </ul>
        </div>
        <ul>{listItems}</ul>
        <BookNowButton />
      </div>
    )
  }
});

module.exports = Navigation;
