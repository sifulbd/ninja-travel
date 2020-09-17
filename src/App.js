import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <Router>
      <Header></Header>
      <div>
        <Switch>
          <Route path="/destination">
            <Booking />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exect path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
