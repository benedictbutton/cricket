import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import UserContainer from './containers/UserContainer'
import UsersContainer from './containers/UsersContainer'
import GameContainer from './containers/GameContainer';
import TwoPlayerContainer from './containers/TwoPlayerContainer';

const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route>
          <Route path="/users"    component={UsersContainer} />
          <Route path="/users/:id" component={UserContainer} />
          <Route path="games/new" component={GameContainer} />
          <Route path="two_players/new" component={TwoPlayerContainer} />
        </Route>
    </Router>
  );
}

export default App;
