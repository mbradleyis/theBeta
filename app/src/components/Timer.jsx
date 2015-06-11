var React = require('react');
var Counter = require('./Counter.jsx');
var TimerButtons = require('./TimerButtons.jsx');

var Timer = React.createClass({

  render: function() {
    return (
      <div>
        <Counter time="300"/>
        <Counter time="1000"/>
        <TimerButtons/>
      </div>
    );
  }

});

module.exports = Timer;
