import React, { Component } from 'react';
import './App.css';
import SurveyAppBar from './components/SurveyAppBar';
import LoginForm from './components/LoginForm';
import QuestionsBoard from './components/QuestionsBoard';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    }

    this.loginHandler = this.loginHandler.bind(this);
  }

  loginHandler(){
    this.setState({
      loggedIn:!this.state.loggedIn
    });
  }
  render() {
    return (
      <div>
        <SurveyAppBar/>
        <div className="container">
           {!this.state.loggedIn?
             <LoginForm 
               loggedIn={this.state.loggedIn}
               loginHandler={this.loginHandler}/>
               :<QuestionsBoard/>}
        </div>
      </div>
    );
  }
}

export default App;
