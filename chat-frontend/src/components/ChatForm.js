import React, { Component } from "react";
import "../App.css";

class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: "",
      message: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      <div className="msb-reply">
        <form onSubmit={this.handleSubmit}>
          <input
            name="handle"
            id="handle"
            type="text"
            placeholder="handle"
            onChange={this.handleChange}
          />
          <input
            name="message"
            id="message"
            onChange={this.handleChange}
            type="text"
            placeholder="Type a message"
          />
          <button type="submit">
            send&nbsp;
            <i className="fa fa-paper-plane-o"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default ChatForm;
