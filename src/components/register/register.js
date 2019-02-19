import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { Image, Button } from 'semantic-ui-react';
import { customInput} from "../customInput/customInput";
import { connect } from 'react-redux';
import {validate} from "../validation/validation";
import * as actions from '../../actionCreators/actionCreators'
import './register.css';


class RegisterForms extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { handleSubmit, gender } = this.props;
        return(
            <form className='form-container' onSubmit={handleSubmit}>
                <div className='first-block'>
                    <Image src={gender ==='Male'
                        ? require('../.././assets/john.jpg')
                         : require('../.././assets/anna.jpg')}/>
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
                           onChange={e => this.props.chooseGender(e.target.value)}
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

const mapStateToProps = (state) => ({
    gender: state.registration.gender
});


export default connect(mapStateToProps, actions)(RegisterForms);

