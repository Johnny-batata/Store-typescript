import { Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home.tsx';


const App: React.FC = () =>  {
  return (
    <div>
      <Route exact path="/" component={ Home } />
    </div>
  );
}

export default App;
