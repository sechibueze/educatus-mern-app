import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/layouts/Home';
import Register from './components/layouts/Register';
import Login from './components/layouts/Login';
import Dashboard from './components/layouts/Dashboard';
import ProfileList from './components/layouts/ProfileList';
import Profile from './components/layouts/Profile';
import Authenticate from './utils/Authenticate';
import store from './store';
import { loadUser } from './actions/authActions';
// const Post = () => <h1>Profile</h1>

const App = () => {
  // componentDidMount
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return  (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <div className='container'>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Authenticate exact path='/dashboard' component={Dashboard} />
              <Route exact path='/profiles' component={ProfileList} />
              <Route exact path='/profiles/:id' component={Profile} />
            </div>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
