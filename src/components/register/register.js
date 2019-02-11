import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { Image, Input, Select, Button } from 'semantic-ui-react';
import { customInput} from "../customInput/customInput";
import {validate} from "../validation/validation";
import './register.css';


class RegisterForms extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { handleSubmit } = this.props;
        return(
            <form className='form-container' onSubmit={handleSubmit}>
                <div className='first-block'>
                    <Image src={require('../.././assets/john.jpg')}/>
                    <div className='right-input-container'>

                        <Field name='firstname'
                               component={customInput}
                               label='Name'
                               type='text'/>

                        <Field name='surname'
                               component={customInput}
                               label='Surname'
                               type='text'/>

                        <Field name='number'
                               component={customInput}
                               label='Phone number'
                               type='text'/>

                        <Field name='email'
                               component={customInput}
                               label='Email'
                               type='text'/>
                    </div>
                </div>
                <div className='bottom-input-container'>
                <div>
                    <label>Gender</label>
                    <Field name='gender'
                           className='input-element'
                           component='select'>
                        <option>Male</option>
                        <option>Female</option>
                    </Field>
                </div>
                    <Field name='password'
                           className='input-element'
                           component={customInput}
                           label='Password'
                           type='password'/>
                    <Field name='repeatPassword'
                           className='input-element'
                           component={customInput}
                           label='Repeat password'
                           type='password'/>
                    <Button
                        type='submit'
                        positive>
                        Submit</Button>
                </div>
            </form>
        )
    }
}

RegisterForms = reduxForm({
    form: 'register',
    validate
})(RegisterForms);

export default RegisterForms;
