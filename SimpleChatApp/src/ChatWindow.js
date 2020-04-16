import React, { Component } from "react";
import "./App.css";
import ChatMessages from "./ChatMessages";
import MessageInputForm from "./MessageInputForm";
class ChatWindow extends Component {
  render() {
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{this.props.username}</div>
        <ChatMessages
          messages={this.props.messages}
          username={this.props.username}
        ></ChatMessages>
        <div>
          <MessageInputForm
            onMessageSend={this.props.onMessageSend}
            username={this.props.username}
          ></MessageInputForm>
        </div>
      </div>
    );
  }
}

export default ChatWindow;
