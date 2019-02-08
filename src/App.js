import React, { Component } from 'react';
import './App.css';
import RegisterForms from './components/register'

class App extends Component {
  submit = values => {
    console.log('here');
    window.alert(JSON.stringify(values, null, 4))
  };
  render() {
    return (
      <div className="App">
        <RegisterForms onSubmit={this.submit}/>
      </div>
    );
  }
}

export default App;
