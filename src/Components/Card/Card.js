import React from 'react';

class Card extends React.Component {
   

    render() {
       
        return (
            <div className ="bg-light-green dib br3 ma2 grow">
                <img alt="robots" src={`https://robohash.org/${this.props.id}/test200x200`} />
                 <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
         )
    }
}





export default Card;    