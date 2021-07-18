import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import './App.css';
import  Jumbo   from './Components/Home/Home.js';
import LoginForm from './Components/LoginForm/LoginForm.js';
import Inputform from './Components/InputForm/InputForm.js';
import Footer from './Components/Footer/Footer.js';
import Header from './Components/Header/Header.js';
import EditMap from './Components/EditMap/EditMap.js';
import Map from './Components/Map/Map.js';
import { Button, Navbar  } from 'react-bootstrap';
// import { Link, Router } from "@reach/router";


// function App() {
//   return (
//       <div>
//           <Router>
//             <Header path="/"/>
            
//           </Router>
//         <Jumbo className="App"/>
//         <LoginForm />
//       </div>
//   );
// }

// export default App;

export default function App() {
  return (
        
      <div className="App">

          <Router>
            <div >
          
          
              <Link to="/">Home </Link>{' '}
              <Link to="/login">Login </Link>{' '}
              <Link to="/form">New Record</Link>
          
              {/*
                A <Switch> looks through all its children <Route>
                elements and renders the first one whose path
                matches the current URL. Use a <Switch> any time
                you have multiple routes, but you want only one
                of them to render at a time
              */}
              <hr />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/form">
                  <FormPage />
                </Route>
              </Switch>
            </div>
          </Router>
          {/* <div><Footer/></div> */}
        </div>
        
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (

    <div >
      <Jumbo/>
    </div>
  
  );
} 

function Login() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
 
function FormPage() {
  return (
    <div className="App">
      <Inputform/>
    </div>
  );
}