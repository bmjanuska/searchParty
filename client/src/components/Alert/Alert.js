import React from "react";

const Alert = props => (
  <div
    role="alert"
    className={`alert alert-${props.type} fade in`}
    style={{ width: "80%", margin: "0 auto", marginTop: 18, ...props.style }}
  >
    <p>Cannot Search</p>
  </div>
);

export default Alert;
