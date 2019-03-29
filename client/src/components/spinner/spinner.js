import React from 'react';

import './spinner.css';

const Spinner = () => {
    const divStyle = {
        width: '100%',
        height: '100%'
    };
  return (
      <div className="lds-css ng-scope">
          <div className="lds-spinner" style={divStyle}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
  );
};

export default Spinner;
