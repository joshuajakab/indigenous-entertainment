import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './default.css';

import MainLayout from './layouts/MainLayout';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => (
          <MainLayout >
            <Home />
          </MainLayout>
        )} />
      </Switch>
    </div>
  );
}

export default App;
