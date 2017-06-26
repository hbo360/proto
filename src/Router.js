import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';

import App from './components/App';
import Hello from './components/Hello';
import SigninPage from './components/SigninPage';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} onEnter={requireAuth} />
      <Route exact path="/hello" component={Hello} />
      <Route exact path="/signin" component={SigninPage} />
    </Switch>
  </BrowserRouter>
)

function requireAuth(nextState, replace) {
  if (!sessionStorage.jwt) {
    replace({
      pathname: '/signin',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default Router;
