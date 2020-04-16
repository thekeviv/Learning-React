import React, { Component } from "react";
import ChatButton from "./ChatButton";

class MessageInputForm extends Component {
  state = {
    isDisabled: false,
    message: "",
  };

  onInputMessage = (value) => {
    if (this.state.message !== value) {
      this.setState({ message: value });
    }
  };
  onMessageSend = (e) => {
    e.preventDefault();
    this.props.onMessageSend({
      username: this.props.username,
      text: this.state.message,
    });
    this.setState({ message: "" });
  };

  render() {
    return (
      <form className="input-group" onSubmit={this.onMessageSend}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your message..."
          value={this.state.message}
          onChange={(event) => {
            this.onInputMessage(event.target.value);
          }}
        />
        <ChatButton message={this.state.message}></ChatButton>
      </form>
    );
  }
}

export default MessageInputForm;
