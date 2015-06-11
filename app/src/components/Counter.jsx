var React = require('react');
var moment = require('moment');

var Counter = React.createClass({
  toHHMMSS: function (time) {
    var sec_num = parseInt(time, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = minutes+':'+seconds;
    return time;
  },

  timer: function() {
    var self = this;
    this.intervalTimer = setInterval(function() {
      self.setState({
        startTime: self.state.startTime - 1
      })
    }, 1000);
  },

  getInitialState: function () {
    // Eventually user will input minutes.
    return {
      startTime: parseInt(this.props.time)
    }
  },

  componentDidMount: function() {
    this.timer();
  },

  render: function() {
    if (this.state.startTime === 290) {
      var self = this;
      clearInterval(this.intervalTimer);
      setTimeout(function() {
        self.timer();
      }, 3000)
    }
    return (
      <p> {this.toHHMMSS(this.state.startTime)} </p>
    );
  }

});

module.exports = Counter;