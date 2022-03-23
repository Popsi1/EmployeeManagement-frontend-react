import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className= "container">
          <Switch>
              <Route exact path = "/" component = {ListEmployeeComponent}></Route>
              <Route path = "/employees" component = {ListEmployeeComponent}></Route>
              <Route path = "/add-employee" component = {AddEmployeeComponent} ></Route>
              <Route path = "/edit-employee/:id" component = {AddEmployeeComponent}></Route> 
            </Switch>
        </div>
        <FooterComponent />
        </Router>
    </div>
  );
}

export default App;