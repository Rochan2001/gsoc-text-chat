import React, { Component } from "react";
import "../App.css";

class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: "",
      message: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.socket.emit("chat", {
      handle: this.state.handle,
      message: this.state.message,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div class="msb-reply">
        <form onSubmit={this.handleSubmit}>
          <input
            id="handle"
            type="text"
            placeholder="handle"
            onChange={this.handleChange}
          />
          <input id="message" type="text" placeholder="Type a message" />
          <button type="submit">
            send&nbsp;
            <i class="fa fa-paper-plane-o"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default ChatForm;
