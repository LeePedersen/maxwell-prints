import React from 'react';
import './App.css';
import Portfolio from '../components/Portfolio';
import Header from '../components/Header';
import Error404 from '../components/Error404';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Portfolio} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
