import React from 'react';
import Card from './Card'
import {robots} from './robots'

class CardList extends React.Component {
    renderRobotList () {
        return robots.map((user, i)=>{
            return <Card id ={robots[i].id} name={robots[i].name0} email={robots[i].email} />
        })
    }

    render () {
        return (
            <div>
                {this.renderRobotList()}
            </div>
        )
    }
}




export default CardList;