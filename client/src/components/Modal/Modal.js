import React from "react";
import "./Modal.css";

const Modal = props => (
    <div className="resultModal">
        <div id="modalContent">
            {props.children}
        </div>
    </div>
);

export default Modal; 
