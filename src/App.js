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

filter(){
  const filteredRobots = this.state.robots.filter((robot)=>{
    if(robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) || robot.email.toLowerCase().includes(this.state.searchfield.toLowerCase())){
      return robot
    }
   
})
return filteredRobots
}


  render() {
    
    return (
      <div className="App">
        <h1 className ="f1">Robofriends</h1>
        <SearchBox searchChange={(event)=>{
          this.onSearchChange(event)
        }} />
        <CardList robots={this.filter()} />
      </div>
    );
  }
}

export default App;
