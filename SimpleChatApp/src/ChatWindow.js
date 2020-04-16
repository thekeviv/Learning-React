import React, { Component } from "react";
import "./App.css";
class ChatWindow extends Component {
  state = {
    isDisabled: true,
  };

  onInputMessage = (value) => {
    value.length > 0
      ? this.setState({ isDisabled: false })
      : this.setState({ isDisabled: true });
  };

  render() {
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{this.props.username}</div>

        <ul className="message-list">
          {this.props.messages.map((message, index) => (
            <li
              key={index}
              className={
                message.username === this.props.username
                  ? "message sender"
                  : "message recipient"
              }
            >
              <p>{`${message.username}: ${message.text}`}</p>
            </li>
          ))}
        </ul>

        <div>
          <form className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your message..."
              onChange={(event) => {
                this.onInputMessage(event.target.value);
              }}
            />
            <div className="input-group-append">
              <button
                className="btn submit-button"
                disabled={this.state.isDisabled}
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ChatWindow;
