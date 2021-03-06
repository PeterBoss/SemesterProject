import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {hashHistory, Router, Route, IndexRoute} from 'react-router'
import App from './pages/App';
import Home from './pages/Home';
import Search from './pages/SearchPage';
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import About from "./pages/About";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import Dashboard from "./pages/Dashboard"
import Reservation from "./pages/ReservationPage";
import auth from "./authorization/auth";


function requireAuth(nextState, replace) {
    if (!auth.loggedIn) {
        replace({
            pathname: '/login',
            state: {nextPathname: nextState.location.pathname}
        })
    }
}

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="search" component={Search}/>
            <Route path="reservation/:id/:seats" component={Reservation}/>
            <Route path="login" component={Login}/>
            <Route path="logout" component={Logout}/>
            <Route path="about" component={About}/>
            <Route path="user" component={UserPage}/>
            <Route path="admin" component={AdminPage}/>
            <Route path="dashboard" component={Dashboard} onEnter={requireAuth}/>
        </Route>
    </Router>
), document.getElementById('root'))