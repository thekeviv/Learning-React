import React, { Component } from "react";

class AddNewUser extends Component {
  state = {
    userName: "",
    firstName: "",
    lastName: "",
    gamesPlayed: 0,
  };

  updateUserName = (value) => {
    this.setState((prevState) => ({
      userName: value,
    }));
  };

  updateFirstName = (value) => {
    this.setState({
      firstName: value,
    });
  };

  updateLastName = (value) => {
    this.setState({
      lastName: value,
    });
  };

  render() {
    return (
      <div className="add-new-user">
        <h1>Add New User</h1>
        <div className="add-new-user-inputs">
          <input
            value={this.state.userName}
            type="text"
            placeholder="Enter User Name"
            onChange={(event) => this.updateUserName(event.target.value)}
          />
          <input
            value={this.state.firstName}
            type="text"
            placeholder="Enter First Name"
            onChange={(event) => this.updateFirstName(event.target.value)}
          />
          <input
            value={this.state.lastName}
            type="text"
            placeholder="Enter Last Name"
            onChange={(event) => this.updateLastName(event.target.value)}
          />
        </div>
        <div className="add-new-user-button">
          <input
            type="submit"
            value="Add New User"
            onClick={() => {
              this.props.addNewUser(
                this.state.userName,
                this.state.firstName,
                this.state.lastName,
                this.state.gamesPlayed
              );
            }}
          />
        </div>
      </div>
    );
  }
}

export default AddNewUser;
