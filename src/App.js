import React from 'react';
import './App.css';
import CardList from './Components/Card/CardList';
import SearchBox from './Components/SearchBox/SearchBox';
import Scroll from './Components/Scroll/Scroll';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        robots : [],
        searchfield: ''

    }
   
}
async componentDidMount (){
  try {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if(response.ok){
    const jsonResponse = await response.json();
    this.setState({robots: jsonResponse })
  }
} catch(error) {
  console.log(error)

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
        <Scroll>
          <CardList robots={this.filter()} />
        </Scroll>
        
      </div>
    );
  }
}

export default App;
