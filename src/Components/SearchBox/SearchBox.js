import React from 'react';


class SearchBox extends React.Component {
    
    render() {
        return (
            <div className = "pa2 " >
                <input 
                className = "pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="Search Robots"
                onChange = {
                    
                        (event)=>{this.props.searchChange(event)}
                    }
                
                 />
              
            </div>
        );
    }
}


export default SearchBox;