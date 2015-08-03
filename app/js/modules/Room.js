var React = require('react');
var DataProxy = require('../DataProxy');
var SocialButton = require('../components/SocialButton');
var ContentBox = require('../components/ContentBox');

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
        description: data.META_DESCRIPTION,
        facebookUrl : data.SOCIAL_ICON1,
        twitterUrl : data.SOCIAL_ICON2,
        instagramUrl : data.SOCIAL_ICON3,
        content: data.BLURB1,
        headline: data.H1
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
        <ContentBox content={this.state.content} headline={this.state.headline} />
        <div className="socialSection">
          <SocialButton url={this.state.facebookUrl} type={'facebook'} />
          <SocialButton url={this.state.twitterUrl} type={'twitter'} />
          <SocialButton url={this.state.instagramUrl} type={'instagram'} />
        </div>
      </div>
    );
  }
})

module.exports = Room;
