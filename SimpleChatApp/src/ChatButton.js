import React, { Component } from "react";

class ChatButton extends Component {
  render() {
    return (
      <div className="input-group-append">
        <button
          className="btn submit-button"
          disabled={this.props.message.length < 1}
        >
          SEND
        </button>
      </div>
    );
  }
}

export default ChatButton;
