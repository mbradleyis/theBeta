var React = require('react');

var TimerButtons = React.createClass({

  render: function() {
    return (
      <div className="btn-group" role="group" aria-label="...">
        <button type="button" className="btn btn-default" onClick={this.props.start}>
          <span className="glyphicon glyphicon-play" aria-hidden="true"></span>
        </button>
        <button type="button" className="btn btn-default" onClick={this.props.pause}>
          <span className="glyphicon glyphicon-pause" aria-hidden="true"></span>
        </button>
        <button type="button" className="btn btn-default" onClick={this.props.stop}>
          <span className="glyphicon glyphicon-stop" aria-hidden="true"></span>
        </button>
      </div>
    );
  }

});

module.exports = TimerButtons;
