import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm} from 'redux-form';
import { customInput} from "../customInput/customInput";
import './cardRegistration.css'

class CardRegistration extends Component {
    render() {
        return (
            <div className='card-container'>
                <img
                    alt='card'
                    className='card-image'
                    src={require('../../assets/credit-card1.svg')}/>
                <div className='card-input-container'>
                    <Field name='surname'
                           component={customInput}
                           label='Card number'
                           type='text'/>
                    <Field name='surname'
                           component={customInput}
                           label='Surname'
                           type='text'/>
                </div>
            </div>
        );
    }
}

CardRegistration = reduxForm({
    form: 'card'
})(CardRegistration);

export default CardRegistration;
