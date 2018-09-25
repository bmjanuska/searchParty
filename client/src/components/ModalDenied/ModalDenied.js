import React from "react";
import "./ModalDenied.css";
import Modal from "../Modal";

const ModalDenied = props => (
    <Modal>
        <h1>Not tooodaay mere mortal!</h1>
        {/* buttons and whatnot  */}
        {/* close modal */}
        <button className="btn btn-blue" onClick={props.handleClose} >X</button>
    </Modal>
);

export default ModalDenied; 
