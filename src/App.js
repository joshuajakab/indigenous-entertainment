import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './default.css';

import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import About from './components/About';
import Shows from './components/Shows';
import Admin from './components/Admin';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => (
          <MainLayout >
            <Home />
          </MainLayout>
        )} />
        <Route path='/about' render={() => (
          <MainLayout>
            <About />
          </MainLayout>
        )} />
        <Route path='/shows' render={() => (
          <MainLayout >
            <Shows />
          </MainLayout>
        )} />
        <Route path='/admin' render={() => (
          <MainLayout>
            <Admin />
          </MainLayout>
        )} />
        <Route path='/shows' render={() => (
          <MainLayout>
            <Shows />
          </MainLayout>
        )} />
      </Switch>
    </div>
  );
}

export default App;
