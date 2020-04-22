import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card'
import {robots} from './Components/Card/robots'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
        <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
        <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
        
      </div>
    );
  }
}

export default App;
