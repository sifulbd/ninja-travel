import React, { useState, createContext } from 'react';
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
import './assets/css/style.css';
import "react-datepicker/dist/react-datepicker.css";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ResultPage from './Components/ResultPage/ResultPage';


export const PlaceContext = createContext();
export const UserContext = createContext();


function App() {
  const[place, setPlace] = useState(1);
  const [loggedIn, setLoggedInUser] = useState({isSignedIn: false,
    name: '',
    email: '',
    password: '',
  });
  return (
    <UserContext.Provider value={[loggedIn, setLoggedInUser]}>
      <PlaceContext.Provider value={[place, setPlace]}>
        <Router>
          <Header></Header>
          <div>
            <Switch>
              <Route path={`/destination/:placeId`}>
                <Booking>
                </Booking>
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
              <PrivateRoute path="/result/">
                <ResultPage></ResultPage>
              </PrivateRoute>
              <Route exect path="/">
                <Home>

                </Home>
              </Route>
              <Route path="*">
                <Notfound></Notfound>
              </Route>
            </Switch>
          </div>
        </Router>
      </PlaceContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
