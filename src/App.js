import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import RegisterForms from './components/register/register'
import CardRegistration from './components/cardRegistration/cardRegistration';
import Steps from './components/steps/steps'
import * as actions from './actionCreators/actionCreators'


class App extends Component {
  submit = values => {
    console.log('here');
    this.props.addUser(values);
  };
  render() {
    return (
      <div className='App'>
        <div className='reg-container'>
          <div className='reg-limiter'>
              <Router>
                  <div>
                  <Steps/>
                      <Route path='/step1' render={() => <RegisterForms onSubmit={this.submit}/>}/>
                      <Route path='/step2' render={() => <CardRegistration/>}/>
                  </div>
              </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(App);
