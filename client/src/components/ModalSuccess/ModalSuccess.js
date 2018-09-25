import React from "react";
import "./ModalSuccess.css";
import Modal from "../Modal"; 

const ModalSuccess = props => (
    <Modal>
        <h1>Success!</h1>
        {/* buttons and whatnot  */}
        {/* close modal */}
        <button className="btn btn-blue" onClick={props.handleClose} >X Close</button>
    </Modal>
);

export default ModalSuccess; 
