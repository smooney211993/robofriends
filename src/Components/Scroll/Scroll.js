import React from 'react';

class Scroll extends React.Component {
    render(){
        return (
            <div style={{ overflowY: 'scroll', scrollbarColor: 'black blue', border: '7px solid black', height: '500px' }}>
                {this.props.children}
            </div>
        )
    }
}

export default Scroll;