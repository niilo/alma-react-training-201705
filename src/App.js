import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Welcome from './Welcome';
import Todos from './todos/Todos';
import Header from './components/Header';

export default () => (
  <Router>
    <div className='container'>
      <Header />
      <Route exact path='/' component={Welcome} />
      <Route path='/todos' component={Todos} />
    </div>
  </Router>
);
