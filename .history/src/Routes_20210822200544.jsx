import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage'
import Register from './pages/Register/Register'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={LandingPage}/>
        <Route path='/register' exact component={Register}/>
      </Switch>
    </BrowserRouter>
  );
}