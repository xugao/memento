var React = require('react')
var SignIn = require('../components/SignIn');

var SignInContainer = React.createClass({
    render: function () {
        console.log('signincontainer');
        return (
            <SignIn />
        );
    }
});

module.exports = SignInContainer;
