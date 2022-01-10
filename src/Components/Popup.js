import React from "react";
import "../Styles/Popup.css";
const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
      {/* <div>
        <button>Sil</button> <button>Vazgeç</button>
      </div> */}
    </div>
  );
};

export default Popup;
