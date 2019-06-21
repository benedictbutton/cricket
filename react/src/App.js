import React from "react";
import { Route, Switch } from "react-router-dom";

//App Components
import HomeContainer from "./containers/HomeContainer";
import UserIndexContainer from "./containers/UserIndexContainer";
import UserShowContainer from "./containers/UserShowContainer";
import GameIndexContainer from "./containers/GameIndexContainer";
import ScoreCompiler from "./containers/ScoreCompiler";
import ScoreContainer from "./containers/ScoreContainer";
import GameFormContainer from "./containers/GameFormContainer";
import PlayerIndexContainer from "./containers/PlayerIndexContainer";
import PlayerShowContainer from "./containers/PlayerShowContainer";

const App = props => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/users" component={UserIndexContainer} />
        <Route path="/users/:id" component={UserShowContainer} />
        <Route exact path="/games" component={GameIndexContainer} />
        <Route path="/games/new" component={GameFormContainer} />
        <Route path="/games/:id" component={ScoreCompiler} />
        <Route exact path="/players" component={PlayerIndexContainer} />
        <Route path="/players/:id" component={PlayerShowContainer} />
      </Switch>
    </div>
  );
};

export default App;
