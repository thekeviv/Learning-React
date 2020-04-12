import React, { Component } from "react";
import User from "./User";
class VideoGameUsers extends Component {
  render() {
    return (
      <div>
        <h1>Video Game Users</h1>
        <ol>
          {this.props.users.map((user) => (
            <li>
              <User
                key={user.username}
                username={user.username}
                gamesPlayed={user.gamesPlayed}
                showGamesPlayed={this.props.showGamesPlayed}
              />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default VideoGameUsers;
