import React from 'react';
import './App.css';
import {robots} from './Components/Card/robots'
import CardList from './Components/Card/CardList'
import SearchBox from './Components/SearchBox/SearchBox'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Robofriends</h1>
        <SearchBox robots={robots} />
        <CardList robots={robots} />
      </div>
    );
  }
}

export default App;
