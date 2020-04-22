import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card'
import {robots} from './Components/Card/robots'
import CardList from './Components/Card/CardList'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CardList />
      </div>
    );
  }
}

export default App;
