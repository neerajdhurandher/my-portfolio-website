import React, { Component } from 'react';
import CountUp from 'react-countup';

import "../../style/App.scss";

import Tooltip from '../tooltip/tooltip.jsx'

const ShowVisitersCount = (props) => {

  return (
    
    <div className="cardDiv">

      <CountUp start={0} end={props.forShowvisiterCount} duration={2} delay={0}>

        {({ countUpRef }) => (
          <div className="cardDiv">

            {/* <Tooltip text="Doesn't increase on refreshing the page"> */}

              <div className="card" >
                <p> Total Visiters</p>
                <p ref={countUpRef} />
              </div>

            {/* </Tooltip> */}
          </div>
        )}
      </CountUp>
    </div>

  )
};

export default ShowVisitersCount;
