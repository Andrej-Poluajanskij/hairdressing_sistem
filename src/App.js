import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';


import HomePage from './components/HomePageComp/index'
import AdminPage from './components/AdminPageComp/index';
import UserPage from './components/UsersPageComp/index'


import * as ROUTES from './routes';

class App extends Component {
 

  render() {
    return (
      <div>
        <Router>
          <div>         
         
            <Route exact path={ROUTES.HOMEPAGE} component={HomePage} />
            <Route path={ROUTES.USERPAGE} component={UserPage} />
            <Route path={ROUTES.ADMINPAGE} component={AdminPage} />       

              
            
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
