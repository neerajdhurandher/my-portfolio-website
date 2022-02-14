import React from "react";
import Bounce  from "react-reveal/Bounce";
import "./modal.scss";

import Backdrop from "./ModalBackdrop";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";


const modal = (props) => {
  let innerModalRender = null;
  console.log("props status :- " + props.status);
  if (props.status === "success") {
    innerModalRender = (
      <Bounce  bottom opposite duration={1000}>
        <SuccessModal closeModal={props.closeModal} />
      </Bounce >
    );
  }else if (props.status === "error") {
    innerModalRender = (
      <Bounce  bottom opposite duration={1000}>
        <ErrorModal closeModal={props.closeModal} />
      </Bounce >
    );
  }


  return (
    <div className="modal">
      <Backdrop closeModal={props.closeModal} />
      {innerModalRender}
    </div>
  );
};

export default modal;
