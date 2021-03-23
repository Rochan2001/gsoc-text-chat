import React from "react";

function Message(props) {
  let curTime = new Date().toLocaleString();

  return (
    <div>
      <div className="message-feed media">
        <div className="pull-left">
          <p style={{ color: "#575ed8" }}>
            <strong>{props.handle}:</strong>
          </p>
        </div>
        <div className="media-body">
          <div className="mf-content">{props.message}</div>
          <small className="mf-date">
            <i className="fa fa-clock-o"></i> {curTime}
          </small>
        </div>
      </div>

      {/* <div className="message-feed right">
        <div className="pull-right">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar2.png"
            alt=""
            className="img-avatar"
          />
        </div>
        <div className="media-body">
          <div className="mf-content">
            Mauris volutpat magna nibh, et condimentum est rutrum a. Nunc sed
            turpis mi. In eu massa a sem pulvinar lobortis.
          </div>
          <small className="mf-date">
            <i className="fa fa-clock-o"></i> 20/02/2015 at 09:30
          </small>
        </div>
      </div> */}
    </div>
  );
}

export default Message;
