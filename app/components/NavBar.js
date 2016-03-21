var React = require('react');
var Link = require('react-router').Link;

var NavBar = React.createClass({
  render: function () {
    return (
        <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
              <div className="container-fluid">
                  <div className="navbar-header">
                      <Link to='/' className="navbar-brand page-scroll">
                        Home
                      </Link>
                  </div>

                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav navbar-right">
                          <li>
                              <Link to='/signIn'>
                                Sign In
                              </Link>
                          </li>
                          <li>
                              <Link to='/about'>
                                About
                              </Link>
                          </li>
                          <li>
                              <Link to='/contact'>
                                Contact
                              </Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      );
  }
});

module.exports = NavBar;
