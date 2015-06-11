var React = require('react');
    Counter = require('./Counter.jsx'),
    TimerButtons = require('./TimerButtons.jsx'),
    ticktock = require('./js/ticktock.js');

var Timer = React.createClass({
  getInitialState: function () {
    // Eventually user will input minutes.
    return {
      startTime: parseInt(this.props.time)
    }
  },

  stop: function() {
    clearInterval(this.intervalTimer);
    this.setState({
      startTime: this.props.time
    })
  },

  pause: function() {
    clearInterval(this.intervalTimer);
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
    this.tick();
  },

  componentDidMount: function() {
    // this.timer();
  },

  render: function() {

    return (
      <div>
        <Counter mmss={ticktock.toMMSS} startTime={ticktock.toMMSS(this.state.startTime)}/>
        <TimerButtons stop={this.stop} start={this.timer} pause={this.pause}/>
      </div>
    );
  }

});

module.exports = Timer;
