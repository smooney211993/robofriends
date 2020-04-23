import React from 'react';


class SearchBox extends React.Component {
    render() {
        return (
            <div>
                <input type="search" placeholder="Search Robots" />
                <button>Search</button>
            </div>
        );
    }
}


export default SearchBox;