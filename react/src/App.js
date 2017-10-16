import React from 'react';
import { Route, IndexRoute, Router, browserHistory, withRouter } from 'react-router';

//App Components
import HomeContainer from './containers/HomeContainer';
import UserIndexContainer from './containers/UserIndexContainer';
import UserShowContainer from './containers/UserShowContainer';
import GameIndexContainer from './containers/GameIndexContainer';
import ScoreCompiler from './containers/ScoreCompiler';
import ScoreContainer from './containers/ScoreContainer';
import GameFormContainer from './containers/GameFormContainer';
import PlayerIndexContainer from './containers/PlayerIndexContainer';
import PlayerShowContainer from './containers/PlayerShowContainer';

const App = (props) => {
  return(
    <Router history={browserHistory}>
    <Route path='/'  component={HomeContainer}/>
      <Route path="users">
        <IndexRoute component={UserIndexContainer}/>
        <Route path=":id" component={UserShowContainer}/>
      </Route>
      <Route path="games">
        <IndexRoute component={GameIndexContainer}/>
        <Route path="new" component={GameFormContainer}/>
        <Route path=":id" component={ScoreCompiler}/>
      </Route>
      <Route path="players">
        <IndexRoute component={PlayerIndexContainer}/>
        <Route path=":id" component={PlayerShowContainer}/>
      </Route>
  </Router>
  );
}

export default App;
