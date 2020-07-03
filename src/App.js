import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import Landingpage from './components/landingpage/landingpage_component';

const App = () => (
  <BrowserRouter>
    <Route render={({ location }) => (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={450}
          classNames="fade">
          <Switch location={location}>
           <Route exact path="/" component={Landingpage}/>  
           
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}>
    </Route>
  </BrowserRouter>
)
export default App;
