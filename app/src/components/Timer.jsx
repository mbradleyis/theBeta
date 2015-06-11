var React = require('react');
var Counter = require('./Counter.jsx');
var TimerButtons = require('./TimerButtons.jsx');

var Timer = React.createClass({

  render: function() {
    return (
      <div>
        <Counter time="300"/>
        <TimerButtons/>
      </div>
    );
  }

});

module.exports = Timer;
