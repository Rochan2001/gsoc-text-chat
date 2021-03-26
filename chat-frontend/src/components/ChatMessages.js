import React, { Component } from "react";
import "../App.css";
import ChatForm from "./ChatForm";
import io from "socket.io-client";
import shortid from "shortid";
import Message from "./Message";

const socket = io.connect("http://localhost:5000");

class ChatMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    socket.on("chat", (data) => {
      data.id = shortid.generate();
      data.curTime = new Date().toLocaleString();
      console.log(data);
      this.setState({
        messages: [...this.state.messages, data],
      });
    });
  }

  render() {
    return (
      <div id="frost-chat">
        <div className="ms-body">
          <div id="chat-window">
            {this.state.messages.map((message) => (
              <Message
                key={message.id}
                handle={message.handle}
                message={message.message}
                time={message.curTime}
              />
            ))}
          </div>
          <ChatForm socket={socket} />
        </div>
      </div>
    );
  }
}

export default ChatMessages;
