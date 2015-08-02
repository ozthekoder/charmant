var React = require('react');
var DatePicker = require('react-date-picker');
var $ = require('jquery');

var BookNowButton = React.createClass({
  getInitialState: function(){
    return {
      open: false
    };
  },
  componentDidMount: function(){
    $('.dp-nav-cell').empty();
  },
  toggleCalendar: function(){
    this.setState({
      open: !this.state.open
    })
  },
  onDateChange: function(dateString, moment){
    console.log('New Booking Date: ' + dateString + ' Selected!');
  },
  render: function(){

    let display = {
      display : this.state.open ? 'block' : 'none'
    };

    let cls = ['booking-calendar'];

    if(this.state.open) {
      cls.push('open')
    }

    return (
        <div onMouseEnter={this.toggleCalendar} onMouseLeave={this.toggleCalendar} className={cls.join(' ')}>
          <a type="button" role="button">Book Now</a>
          <div className="calendarWrapper" style={display}>
            <span className="calendarHeading">Select Arrival Date</span>
            <DatePicker
            minDate={Date.now()}
            date={Date.now()}
            onChange={this.onDateChange}
            hideFooter={true} />
          </div>
        </div>
    );
  }
});

module.exports = BookNowButton;
