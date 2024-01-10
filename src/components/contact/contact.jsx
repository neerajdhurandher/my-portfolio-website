import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contact.scss";
import * as emailjs from "emailjs-com";
import Title from "../ui-components/title/title";

import Modal from '../contact-modal/Modal';

import bg_img from "../../assets/contact/contact-coding-bg.jpg"

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      user_email: "",
      message: "",
      sending: false,
      successModal: false,
      errorModal: false,
    };
  }

  inputHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    var self = this;
    this.setState({ sending: true });
    e.preventDefault();

    var template_params = {
      user_name: this.state.name,
      user_email: this.state.email,
      message: this.state.message,
    };


      //  EMAIL.JS API KEY IN FORMAT user_xxxxxxxxxxxxxxxxxx
      let API_KEY = "user_3wyedjZDiCRhIZPqDztot";

      //  EMAIL.JS TEMPLATE ID
      let TEMPLATE_ID = "template_pi4nywi";
  
      // EMAIL.JS Service Id 
      let SERVICE_ID = "service_mtgfuxj";


    emailjs.send(SERVICE_ID, TEMPLATE_ID, template_params , API_KEY).then(
      function (response) {
        console.log("response :- " + response.status);
        if (response.status === 200) {
          self.showSuccessModal();
        } else {
          self.showErrorModal();
        }
      },
      function (error) {
        self.showErrorModal();
      }
    );
  };

  // SUCCESS MODAL
  showSuccessModal = () => {
    this.setState({ successModal: true, sending: false });
    this.resetForm();
  };
  // ERROR MODAL
  showErrorModal = () => {
    this.setState({ errorModal: true, sending: false });
    this.resetForm();
  };
  // RESET CONTACT FORM
  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }
  // CLOSE ALL MODALS
  closeModal = () => {
    this.setState({ successModal: false, errorModal: false });
  };

  resetForm = () => {
    this.setState({ name: "", email: "", message: "" });
  };

  render() {
    let submitButtonRender = (
      <div className="small__button">
        <button aria-label="send message" type="submit" value="Send Message">
          Send Message
        </button>
      </div>
    );
    if (this.state.sending) {
      submitButtonRender = (
        <div className="small__button sending-btn">
          <div className="flex-center">
            <div className="sbl-circ"></div>
          </div>
        </div>
      );
    }
    let modalRender = null;
    if (this.state.successModal) {
      modalRender = <Modal closeModal={this.closeModal} status="success" />;
    } else if (this.state.errorModal) {
      modalRender = <Modal closeModal={this.closeModal} status="error" />;
    }
    return (
      <div  id="contact">
        {modalRender}
        <div className="wrapper">
          <Title title="CONTACT ME" />
          <p className="font15 padding5" style={{textAlign:"left"}}>For Projects, Collaboration, Events or Other Works, just drop a message here. I would love to work with you.</p>
   
          <Row className="padding20">
            <Col md={12} lg={6}>
              <form id="contact-form" onSubmit={this.handleSubmit}>
                <h4 className="font30 weight600 padding30 active-link">Write Message Here.</h4>
                <input  type="text" placeholder="Name" required name="name" value={this.state.name} onChange={this.inputHandler} />
                <input type="email" placeholder="Email" required name="email" value={this.state.email} onChange={this.inputHandler} />
                <textarea
                  rows="6"
                  cols="50"
                  placeholder="Message..."
                  required
                  name="message"
                  value={this.state.message}
                  onChange={this.inputHandler}
                ></textarea>
                {submitButtonRender}
              </form>
            </Col>
          </Row>
          
           
           
        </div>
      </div>
    );
  }
};

export default Contact;
