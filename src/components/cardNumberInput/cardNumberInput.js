import React from 'react';
import { Input } from 'semantic-ui-react';
import './cardNumberInput.css';


const cardNumberInput = () => {
    const {label, input, type, meta} = props;
  return(
      <div className='input-number-container'>
          <div className='input-number'>
              <label>{label}</label>

          </div>
      </div>
  )
};