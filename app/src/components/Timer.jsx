var React = require('react');
var Counter = require('./Counter.jsx');

var Timer = React.createClass({

  render: function() {
    return (
      <div>
        <Counter time="300"/>
        <Counter time="1000"/>
      </div>
    );
  }

});

module.exports = Timer;
