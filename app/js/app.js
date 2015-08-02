var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DataProxy = require('./DataProxy');
var Home = require('./modules/Home');
var Rooms = require('./modules/Rooms');
var Room = require('./modules/Room');
var Footer = require('./components/Footer');
var Navigation = require('./components/Navigation');

var dataProxy = new DataProxy();

var App = React.createClass({
  componentDidMount: function(){

  },
  render: function(){
    return (
      <div className="container" id="app">
        <Navigation/>
        <a className="logo" href="#/"><img src="content/logo.png" /></a>
        <RouteHandler/>
        <Footer/>
      </div>
    );
  }
});

var data;

dataProxy.fetchAll().then(function(data){
  data = data;
  console.log(data);
})

var routes = (
  <Route handler={App}>
    <Route path="/" handler={Home} />
    <Route path="rooms" handler={Rooms} />
    <Route path="rooms/:name" handler={Room} />
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});
