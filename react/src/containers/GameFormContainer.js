import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PointsField from "../components/PointsField";
import TwoPlayerField from "../components/TwoPlayerField";
import TeamsField from "../components/TeamsField";
import TeamLabel from "../components/TeamLabel";
import ExistingPlayerContainer from "./ExistingPlayerContainer";
import PlayerNameAlert from "../components/PlayerNameAlert";

class GameFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameType: "twoPlayer",
      playerOne: "",
      playerTwo: "",
      playerThree: "",
      playerFour: "",
      existingPlayer: [0, 0, 0, 0],
      formPayload: {},
      data: [],
      messages: null,
      toGame: false,
      playPoints: false
    };
    this.handleGameType = this.handleGameType.bind(this);
    this.handlePlayPoints = this.handlePlayPoints.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleExistingPlayer = this.handleExistingPlayer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addNewGame = this.addNewGame.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.confirmPlayerAlert = this.confirmPlayerAlert.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  handleExistingPlayer(id, name) {
    if (!this.state.playerOne) {
      let player = this.state.existingPlayer.slice();
      player[0] = id;
      this.setState({ existingPlayer: player });
      this.setState({ playerOne: name });
    } else if (!this.state.playerTwo) {
      let player = this.state.existingPlayer.slice();
      player[1] = id;
      this.setState({ existingPlayer: player });
      this.setState({ playerTwo: name });
    } else if (!this.state.playerThree) {
      let player = this.state.existingPlayer.slice();
      player[2] = id;
      this.setState({ existingPlayer: player });
      this.setState({ playerThree: name });
    } else {
      let player = this.state.existingPlayer.slice();
      player[3] = id;
      this.setState({ existingPlayer: player });
      this.setState({ playerFour: name });
    }
  }

  addNewGame(formPayload) {
    fetch("/api/v1/games.json", {
      credentials: "same-origin",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formPayload)
    })
      .then(response => {
        let parsed = response.json();
        return parsed;
      })
      .then(responseData => {
        if (responseData.message) {
          this.setState({
            messages: responseData.message
          });
        } else {
          this.setState({
            data: [...this.state.data, responseData],
            toGame: true
          });
          // let gameId = responseData.game;
          // let path = `/games/${gameId}`;
          // this.props.history.push(path);
        }
      });
  }

  handleGameType(event) {
    this.setState({ gameType: event.target.value });
  }

  handlePlayPoints() {
    this.setState({ playPoints: !this.state.playPoints });
  }

  handleForm(name, player) {
    switch (name) {
      case "playerOne":
        let playerOne = { playerOne: player };
        Object.assign(this.state.formPayload, playerOne);
        break;
      case "playerTwo":
        let playerTwo = { playerTwo: player };
        Object.assign(this.state.formPayload, playerOne, playerTwo);
        break;
      case "playerThree":
        let playerThree = { playerThree: player };
        Object.assign(
          this.state.formPayload,
          playerOne,
          playerTwo,
          playerThree
        );
        break;
      case "playerFour":
        let playerFour = { playerFour: player };
        Object.assign(
          this.state.formPayload,
          playerOne,
          playerTwo,
          playerThree,
          playerFour
        );
        break;
      case "gameType":
        let gameType = { gameType: player };
        Object.assign(
          this.state.formPayload,
          playerOne,
          playerTwo,
          playerThree,
          playerFour,
          gameType
        );
        break;
      case "playPoints":
        let playPoints = { playPoints: player };
        Object.assign(
          this.state.formPayload,
          playerOne,
          playerTwo,
          playerThree,
          playerFour,
          gameType,
          playPoints
        );
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let player;
    for (let i = 0; i < 6; i++) {
      switch (i) {
        case 0:
          let nameOne = "playerOne";
          if (this.state.existingPlayer[i] === 0) {
            player = this.state.playerOne;
            this.setState(
              { playerOne: player },
              this.handleForm(nameOne, player)
            );
          } else {
            player = this.state.existingPlayer[i];
            this.setState(
              { playerOne: this.state.playerOne },
              this.handleForm(nameOne, player)
            );
          }
          break;
        case 1:
          let nameTwo = "playerTwo";
          if (this.state.existingPlayer[i] === 0) {
            player = this.state.playerTwo;
            this.setState(
              { playerTwo: player },
              this.handleForm(nameTwo, player)
            );
          } else {
            player = this.state.existingPlayer[i];
            this.setState(
              { playerTwo: this.state.playerTwo },
              this.handleForm(nameTwo, player)
            );
          }
          break;
        case 2:
          let nameThree = "playerThree";
          if (this.state.existingPlayer[i] === 0) {
            player = this.state.playerThree;
            this.setState(
              { playerThree: player },
              this.handleForm(nameThree, player)
            );
          } else {
            player = this.state.existingPlayer[i];
            this.setState(
              { playerThree: this.state.playerThree },
              this.handleForm(nameThree, player)
            );
          }
          break;
        case 3:
          let nameFour = "playerFour";
          if (this.state.existingPlayer[i] === 0) {
            player = this.state.playerFour;
            this.setState(
              { playerFour: player },
              this.handleForm(nameFour, player)
            );
          } else {
            player = this.state.existingPlayer[i];
            this.setState(
              { playerFour: this.state.playerFour },
              this.handleForm(nameFour, player)
            );
          }
          break;
        case 4:
          let gameType = "gameType";
          player = this.state.gameType;
          this.handleForm(gameType, player);
          break;
        case 5:
          let playPoints = "playPoints";
          player = this.state.playPoints;
          this.handleForm(playPoints, player);
          break;
      }
    }
    this.addNewGame(this.state.formPayload);
  }

  confirmPlayerAlert() {
    this.setState({ messages: null });
  }

  render() {
    const { from } = this.props.location.state || "/";
    const { toGame } = this.state;
    let errors;
    if (this.state.messages) {
      errors = this.state.messages.map(error => {
        alert = error;
        return <PlayerNameAlert alert={alert} />;
      });
    }

    if (this.state.toGame === true) {
      return <Redirect to={`${this.state.data[0].game}`} />;
    }

    return (
      // <div>
      <form onSubmit={this.handleSubmit}>
        {this.state.messages && (
          <div className="callout">
            {errors}
            <button
              className="close-button"
              aria-label="Dismiss alert"
              type="button"
              onClick={this.confirmPlayerAlert}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}

        <label>
          Select Game Type
          <select value={this.state.value} onChange={this.handleGameType}>
            <option value="twoPlayer">Two Player</option>
            <option value="teams">Teams</option>
          </select>
        </label>

        <div className="row">
          <TeamLabel gameType={this.state.gameType} team="One" />
        </div>

        <div className="row">
          <TwoPlayerField
            player={this.state.playerOne}
            handleChange={this.handleChange}
            label={"Player 1"}
            name={"playerOne"}
          />

          <TwoPlayerField
            player={this.state.playerTwo}
            handleChange={this.handleChange}
            label={"Player 2"}
            name={"playerTwo"}
          />

          <ExistingPlayerContainer
            handleExistingPlayer={this.handleExistingPlayer}
          />
        </div>

        <div className="row">
          <TeamLabel gameType={this.state.gameType} team="Two" />
        </div>

        <div className="row">
          <TeamsField
            gameType={this.state.gameType}
            player={this.state.playerThree}
            handleChange={this.handleChange}
            label={"Player 3"}
            name={"playerThree"}
          />

          <TeamsField
            gameType={this.state.gameType}
            player={this.state.playerFour}
            handleChange={this.handleChange}
            label={"Player 4"}
            name={"playerFour"}
          />
        </div>

        <PointsField handlePlayPoints={this.handlePlayPoints} />

        <button className="button" type="submit" value="Submit">
          Submit
        </button>
      </form>
    );
  }
}

export default GameFormContainer;
