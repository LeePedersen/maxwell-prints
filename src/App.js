import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Error404 from './components/Error404';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Portfolio} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
