import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//pages
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
