import React from 'react';


const Card =(props)=> {
    return (
        <div className ="bg-light-green dib br3 ma2 grow">
            <img alt="robots" src='https://robohash.org/yellow/test200x200' />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}



export default Card;    