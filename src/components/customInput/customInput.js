import React from 'react';
import { Input } from 'semantic-ui-react';
import './customInput.css';


export const customInput = props => {
    const { label, input, type, meta } = props;
    return(
        <div className='custom-inp-container'>
        <div className='custom-inp' >
            <label>{label}</label>
            <Input className='input-element'
                   error = {meta.error && meta.touched}
                   {...input}
                   type={type}/>
        </div>
            {(meta.error && meta.touched) && (
                <div style={{color: 'tomato'}}>{meta.error}</div>
            )}
        </div>
    )
};