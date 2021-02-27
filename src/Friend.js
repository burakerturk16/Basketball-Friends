import React, { Component } from 'react'

class Friend extends Component {
    render(){
        const { name, lastName } = this.props;
        return (
          <h2>Hey {name} {lastName}</h2>
        )
    }
}  

export default Friend;