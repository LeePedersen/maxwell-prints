import React from 'react';
import './App.css';
import Home from './components/Home';
import Painting from './components/Painting';
import Error404 from './components/Error404';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/painting' component={Painting} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
