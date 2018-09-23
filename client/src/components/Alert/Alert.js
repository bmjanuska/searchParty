import React from "react";

const Alert = props =>
    <div
        className={`alert alert-$(props.tyep) fade in`}
    >
        {props.children}
    </div>

export default Alert

