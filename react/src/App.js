import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import GameShowContainer from './containers/GameShowContainer';
import GameTwoContainer from './containers/GameTwoContainer';

const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/' >
        <Route path="games/new" component={GameShowContainer} >
          <Route path="games/new/two_player" component={GameTwoContainer} />
        </Route>
      </Route>
    </Router>
  );
}

export default App;
