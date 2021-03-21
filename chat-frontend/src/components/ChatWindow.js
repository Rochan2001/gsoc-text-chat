import React, { Component } from "react";
import "../App.css";

class ChatWindow extends Component {
  constructor() {
    super(prompt);
  }

  render() {
    return (
      <div>
        <div class="container ">
          <div class="ms-body">
            <div class="window">
              <div class="message-feed media">
                <div class="pull-left">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt=""
                    class="img-avatar"
                  />
                </div>
                <div class="media-body">
                  <div class="mf-content">
                    Quisque consequat arcu eget odio cursus, ut tempor arcu
                    vestibulum. Etiam ex arcu, porta a urna non, lacinia
                    pellentesque orci. Proin semper sagittis erat, eget
                    condimentum sapien viverra et. Mauris volutpat magna nibh,
                    et condimentum est rutrum a. Nunc sed turpis mi. In eu massa
                    a sem pulvinar lobortis.
                  </div>
                  <small class="mf-date">
                    <i class="fa fa-clock-o"></i> 20/02/2015 at 09:00
                  </small>
                </div>
              </div>

              <div class="message-feed right">
                <div class="pull-right">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    alt=""
                    class="img-avatar"
                  />
                </div>
                <div class="media-body">
                  <div class="mf-content">
                    Mauris volutpat magna nibh, et condimentum est rutrum a.
                    Nunc sed turpis mi. In eu massa a sem pulvinar lobortis.
                  </div>
                  <small class="mf-date">
                    <i class="fa fa-clock-o"></i> 20/02/2015 at 09:30
                  </small>
                </div>
              </div>
            </div>

            <div class="msb-reply">
              <form>
                <input type="text" placeholder="handle" />
                <input type="text" placeholder="Type a message" />
                <button type="submit">
                  send&nbsp;
                  <i class="fa fa-paper-plane-o"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatWindow;
