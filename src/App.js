import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import RegisterForms from './components/register/register'
import Steps from './components/steps/steps'
import * as actions from './actionCreators/actionCreators'

class App extends Component {
  submit = values => {
    console.log('here');
   // let info = (JSON.stringify(values, null, 4));
    this.props.addUser(values);
  };
  render() {
    return (
      <div className='App'>
        <div className='reg-container'>
          <div className='reg-limiter'>
              <Steps/>
        <RegisterForms onSubmit={this.submit}/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(App);
