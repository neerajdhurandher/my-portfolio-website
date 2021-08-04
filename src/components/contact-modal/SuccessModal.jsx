import React from "react";
import "./modal.scss";
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';

const successModal = (props) => (
  <div className="sucess__modal">
    <p>Message Send  </p>
    <CheckCircleOutlineRoundedIcon style = {{color:"green" ,fontSize:"40px", marginTop:"4%"}}/>
    <p>
      Thank you for contact me.<br></br>I will respond soon.
    </p>
    <div role="button" tabIndex={0} className="modal__btn flex-center" onClick={props.closeModal} onKeyDown={props.closeModal}>
      <p>Ok</p>
    </div>
  </div>
);

export default successModal;
