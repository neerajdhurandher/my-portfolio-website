import React from "react";
import "./modal.scss";

const errorModal = (props) => (
  <div className="error__modal">
    <p>Ooops!!!</p>
    <p>Something went wrong,</p>
    <p>Please check your internet connection.</p>
    <div role="button" tabIndex={0} className="modal__btn flex-center" onClick={props.closeModal} onKeyDown={props.closeModal}>
      <p>OK</p>
    </div>
  </div>
);


export default errorModal;
