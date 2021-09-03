import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

//pages
import Home from './pages/Home';
import Detail from './pages/Detail';
import Quotes from './pages/Quotes';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/"><h1 style={{ color: "yellow" }}>Characters</h1></Link>
          </li>
          <li>
            <Link to="/quotes"><h1 style={{ color: "yellow" }}>Quotes</h1></Link>
          </li>
          <li>
            <div className="title">
              <p>
                <span class="seasonNum">05</span>
                <span class="B br">Br</span>eaking
              </p>
              <p class="bad">
                <span class="episodeNum">09</span>
                <span class="B">Ba</span>d</p>
            </div>
          </li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/char/:char_id" component={Detail} />
          <Route exact path="/quotes" component={Quotes} />
          <Route path="/quotes/:quote_id" component={QuoteDetail} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
