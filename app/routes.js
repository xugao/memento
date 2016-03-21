var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('./components/Main');
var Home = require('./components/Home');
var SignInContainer = require('./containers/SignInContainer');
var AddNotesContainer = require('./containers/AddNotesContainer');
var hashHistory = ReactRouter.hashHistory;

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='signIn' component={SignInContainer} />
            <Route path='start' component={AddNotesContainer} />
        </Route>
    </Router>
);

module.exports = routes;
