import React, { Component } from "react";
import "../App.css";

class ChatForm extends Component {
  constructor() {
    super(prompt);
  }

  render() {
    return (
      <div class="msb-reply">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="handle" />
          <input type="text" placeholder="Type a message" />
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
