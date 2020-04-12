import React, { Component } from "react";
import AddNewUser from "./AddNewUser";
import VideoGameUsers from "./VideoGameUsers";
class Game extends Component {
  state = {
    users: [{ username: "thekeviv", gamesPlayed: 2 }],
    showGamesPlayed: true,
  };

  addNewUser = (username, firstname, lastname, gamesPlayed) => {
    var newUser = {
      username: username,
      firstname: firstname,
      lastname: lastname,
      gamesPlayed: gamesPlayed,
    };
    var currentUsers = this.state.users;
    currentUsers.push(newUser);
    this.setState({
      users: currentUsers,
    });
  };

  toggleShowGames = () => {
    this.setState((prevState) => ({
      showGamesPlayed: !prevState.showGamesPlayed,
    }));
  };

  render() {
    return (
      <div>
        <AddNewUser addNewUser={this.addNewUser} />
        <div className="show-games-played">
          <h2>Show Games Played by Users?</h2>
          <input
            type="checkbox"
            checked={this.state.showGamesPlayed}
            onChange={this.toggleShowGames}
          />
        </div>
        <VideoGameUsers
          users={this.state.users}
          showGamesPlayed={this.state.showGamesPlayed}
        />
      </div>
    );
  }
}

export default Game;
