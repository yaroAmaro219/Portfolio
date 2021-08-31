// React
import React from 'react'

// React Router
import {
  Route,
  withRouter,
  Switch,
} from 'react-router-dom';

// React Transition Group
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group'

// Pages
import Landing from './pages/Landing'
import Development from './pages/Development'
import Design from './pages/Design'
import About from './pages/About'
import Contact from './pages/Contact'

// Styles
import './App.css';

function App() {
  return (
    <div className="app">
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={500}
            classNames='fade'>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/engineering" component={Development} />
            <Route exact path="/design" component={Design} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}/>
    </div>
  );
}

export default withRouter(App);
