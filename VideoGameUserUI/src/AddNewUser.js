import React, { Component } from "react";

class AddNewUser extends Component {
  render() {
    return (
      <div className="add-new-user">
        <h1>Add New User</h1>
        <div className="add-new-user-inputs">
          <input type="text" placeholder="Enter User Name" />
          <input type="text" placeholder="Enter First Name" />
          <input type="text" placeholder="Enter Last Name" />
          <input type="submit" value="Add New User" />
        </div>
      </div>
    );
  }
}

export default AddNewUser;
