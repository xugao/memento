var React = require('react');
var Main;

require('../styles/creative.css');

Main = React.createClass({
  render: function() {
    return (
        <div>
            {this.props.children}
        </div>
    );
  }
});

module.exports = Main;
