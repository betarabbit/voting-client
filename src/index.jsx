// jscs:disable validateQuoteMarks
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/App';
import Voting from './components/Voting';
import Results from './components/Results';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['a', 'b'],
      tally: {
        a: 1,
        b: 2,
      },
    },
  },
});

const routes = (
  <Route component={ App }>
    <Route path="/results" component={ Results } />
    <Route path="/" component={ Voting } />
  </Route>
);

ReactDom.render(
  <Provider store={ store }>
    <Router>{ routes }</Router>
  </Provider>,
  document.getElementById('app')
);
