import React, { Component } from "react";

class ChatMessages extends Component {
  render() {
    return (
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
    );
  }
}

export default ChatMessages;
