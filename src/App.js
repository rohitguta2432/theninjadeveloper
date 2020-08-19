import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
                <Header/>
                <Home/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
