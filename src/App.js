import React from 'react';
import './App.css';
import {robots} from './Components/Card/robots'
import CardList from './Components/Card/CardList'
import SearchBox from './Components/SearchBox/SearchBox'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        robots : robots,
        searchfield: ''

    }
   
}

onSearchChange (event){
        this.setState({searchfield: event.target.value})
       
   
}



  render() {
    const filteredRobots = this.state.robots.filter((robot)=>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
  })
    return (
      <div className="App">
        <h1>Robofriends</h1>
        <SearchBox searchChange={(event)=>{
          this.onSearchChange(event)
        }} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
