import React from 'react';


class SearchBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            robots : this.props.robots,
            searchfield: ''

        }
       
    }

    onSearchChange (event){
            this.setState({searchfield: event.target.value})
            const filteredRobots = this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        console.log(filteredRobots);
    }


    render() {
        return (
            <div className = "pa2">
                <input 
                type="search" 
                placeholder="Search Robots"
                onChange = {
                    (event)=>{
                        this.onSearchChange(event)
                    }
                }
                 />
                <button>Search</button>
            </div>
        );
    }
}


export default SearchBox;