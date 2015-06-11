var React = require('react');
var moment = require('moment');

// Desired time is passed in as a prop from Timer.jsx
// @todo: start/stop/pause, user input desired time (in min.)

var Counter = React.createClass({
  getInitialState: function () {
    // Eventually user will input minutes.
    return {
      startTime: parseInt(this.props.time)
    }
  },

  render: function() {
    return (
      <p> {this.props.startTime} </p>
    );
  }

});

module.exports = Counter;
