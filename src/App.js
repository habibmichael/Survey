import React, { Component } from 'react';
import './App.css';
import SurveyAppBar from './components/SurveyAppBar';
import LoginForm from './components/LoginForm';
import Paper from 'material-ui/Paper';


class App extends Component {
  render() {
    return (
      <div>
        <SurveyAppBar/>
        <div className="container">
              <LoginForm/>
        </div>
      </div>
    );
  }
}

export default App;
