var React = require('react');

var UserLogin = React.createClass({
  getInitialState: function () {
    return {
      loggedIn: false
    }
  },

  render: function() {
    var loggedIn = this.state.loggedIn ?
                    "glyphicon glyphicon-user" :
                    "glyphicon glyphicon-pencil"
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#" className={loggedIn} aria-hidden="true"></a>
          </li>
        </ul>
      </div>
    );
  }

});

module.exports = UserLogin;
