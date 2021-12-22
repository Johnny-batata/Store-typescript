import { Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import CardDetails from './pages/CardDetails';

const App: React.FC = () =>  {
  return (
    <div>
      <Route exact path="/card-details/:id" component={ CardDetails } />
      <Route exact path="/" component={ Home } />
    </div>
  );
}

export default App;
