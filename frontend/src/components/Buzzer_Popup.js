import React from "react";
import Buzzer_Form from "./Buzzer_Form"
import "../styles/Buzzer.css";

const Buzzer_Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
<div className="form_container">
  <div className="form-title">Form Title</div>
        <Buzzer_Form />
        </div>
      </div>
    </div>
  );
};

export default Buzzer_Popup;