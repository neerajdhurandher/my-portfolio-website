import React, { useState } from 'react';

import './tooltip.scss';

const Tooltip = ({ children, text, ...rest }) => {
    const [show, setShow] = React.useState(false);
  
    return (
      <div className="tooltip-container">
        <div className={show ? 'tooltip-box visible tooltip-box-position' : 'tooltip-box tooltip-box-position'}>
          {text}
          <span className="tooltip-arrow tooltip-arrow-position" />
        </div>
        <div
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          {...rest}
        >
          {children}
        </div>
      </div>
    );
  };

  export default Tooltip;