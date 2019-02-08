import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';

class RegisterForms extends Component{
    render(){
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <Field name='name' component='input' type='text'/>
                </div>
                <div>
                    <label>Preferred Formatting</label>
                    <Field name='preference' component='select'>
                        <option/>
                        <option value="tabs">Tabs</option>
                        <option value="spaces">Spaces</option>
                    </Field>
                </div>
                <div>
                    <label>Sign up to newsletter?</label>
                    <Field
                    name='newsletter'
                    component='input'
                    type='checkbox'
                    />
                </div>
                <button type='submit' >Submit</button>
            </form>
        )
    }
}

RegisterForms = reduxForm({
    form: 'register'
})(RegisterForms);

export default RegisterForms;
