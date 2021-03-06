import React, { Component } from "react";
import PropTypes from "prop-types";
class User extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    gamesPlayed: PropTypes.number.isRequired,
    showGamesPlayed: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <div>
        <h2>{this.props.username}</h2>
        {this.props.showGamesPlayed ? (
          <h3>Games Played: {this.props.gamesPlayed}</h3>
        ) : (
          <h2>*</h2>
        )}
      </div>
    );
  }
}

export default User;
