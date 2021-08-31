// React
import React from 'react'

// React Router
import {
  Route,
  withRouter,
  Switch,
} from 'react-router-dom';

// Pages
import Landing from './pages/Landing'
import Development from './pages/Development'

// Styles
import './App.css';

function App() {
  return (
    <div className="app">
      <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/engineering" component={Development} />
      </Switch>
    </div>
  );
}

export default App;
