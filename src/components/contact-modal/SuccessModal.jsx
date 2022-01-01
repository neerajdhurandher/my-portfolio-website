import React from "react";
import "./modal.scss";
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';

const successModal = (props) => (
  <div className="sucess__modal">
    <div className = "success_msg_heading">
    <p>Message Send  </p>
    </div>
    <CheckCircleOutlineRoundedIcon style = {{color:"green" ,fontSize:"40px", marginTop:"4%"}}/>
    <p>
      Thank you for contacting me.<br></br>I will respond soon.
    </p>
    <div role="button" tabIndex={0} className="modal__btn flex-center" onClick={props.closeModal} onKeyDown={props.closeModal}>
      <p>OK</p>
    </div>
  </div>
);

export default successModal;
