import React, { lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import { Spinner } from './Components/Spinner';

const Home = lazy(() => import('./Components/Home'))

function App() {
  return (
    <React.Suspense fallback={<Spinner />}>
    <Router>
      <Switch>
        <Route path="/home/" exact={true} component={Home} />
        <Redirect to="/home" />
      </Switch>
    </Router>
  </React.Suspense>
  );
}

export default App;
