import React from "react";
import "./hamburger.scss"

const menuBtn = document.querySelector('.ham-menu-btn');
let menuOpen = false;

function hamburgerEvent (){

    if(!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
    }

   };

const Hamburger = () => (

  <div class="ham-menu-btn" onClick={{hamburgerEvent}}>
  <div class="ham-menu-btn__burger"></div>
</div>

);

export default Hamburger;
