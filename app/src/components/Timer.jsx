var React = require('react');
    Counter = require('./Counter.jsx'),
    TimerButtons = require('./TimerButtons.jsx'),
    ticktock = require('./js/ticktock.js');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      startTime: 0,
      isRunning: false,
    }
  },

  handleChange: function(event) {
    if (event.target.value === "" && !this.state.isRunning) {
      this.stop();
      return;
    } else if (this.state.isRunning) {
      return;
    } else {
      this.setState({
        startTime: event.target.value
      });
    }
    console.log(event.target.value);
  },

// Countdown timer functions.
  stop: function() {
    clearInterval(this.intervalTimer);
    this.setState({
      startTime: 0,
      isRunning: false
    })
  },

  pause: function() {
    clearInterval(this.intervalTimer);
    this.setState({
      isRunning: false
    })
  },

  tick: function() {
    var self = this;
    this.intervalTimer = setInterval(function() {
      console.log("TICK-TOCK");
      // Stop time at 00:00
      if (self.state.startTime === 0) {
        clearInterval(self.intervalTimer);
        return;
      }
      self.setState({
        startTime: self.state.startTime - 1
      })
    }, 1000);
  },

  timer: function() {
    var self = this;
    if (!this.state.startTime) {
      this.setState({
        // startTime: parseInt(this.refs.timeInput.getDOMNode().value)
        startTime: parseInt(this.state.startTime)
      });
    }
    // Prevent starting tick multiple times on click.
    if (!this.state.isRunning) {
      this.state.isRunning = true;
      this.tick();
    }
  },

  render: function() {

    return (
      <div>
        <input ref="timeInput" type="text" name="time-input" onChange={this.handleChange}/>
        <Counter mmss={ticktock.toMMSS} startTime={ticktock.toMMSS(this.state.startTime)} />
        <TimerButtons stop={this.stop} start={this.timer} pause={this.pause}/>
      </div>
    );
  }

});

module.exports = Timer;
