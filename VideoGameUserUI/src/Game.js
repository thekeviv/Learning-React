import React, { Component } from "react";
import VideoGameUsers from "./VideoGameUsers";
class Game extends Component {
  state = {
    users: [{ username: "thekeviv", gamesPlayed: 2 }],
  };
  render() {
    return (
      <div>
        <VideoGameUsers users={this.state.users} showGamesPlayed={true} />;
      </div>
    );
  }
}

export default Game;
