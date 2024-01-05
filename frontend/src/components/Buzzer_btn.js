import React, { useState } from 'react';
import buzzer_icon from "../assets/buzzer_icon.png"
import "../styles/Buzzer.css";

function Buzzer_btn() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    <div className='buzzer_btn' onClick={togglePopup}>
      
      <img src={buzzer_icon} height='30px' width='40px' />
      <span className='buzzer-text'>Buzzer</span>
    </div>
    {/* <button className='buzzer_btn' onClick={togglePopup} >Buzzer</button> */}

    {/* {isOpen && <Buzzer_Popup
      handleClose={togglePopup}
    />} */}
  </div>
}

export default Buzzer_btn;