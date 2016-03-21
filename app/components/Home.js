var React = require('react');
var Link = require('react-router').Link;
var NavBar = require('../components/NavBar');

var Home = React.createClass({
    render: function() {
        return (
            <div>
                <NavBar />

                <header>
                    <div className="header-content">
                        <div className="header-content-inner">
                            <h1>Memorize Effortlessly</h1>
                            <Link to='/start' className="btn btn-primary btn-xl page-scroll">
                              Start
                            </Link>
                        </div>
                    </div>
                </header>
        </div>
        );
    }
});

module.exports = Home;
