import React, { Component } from 'react';
import birds from './../birds.json';

class Bird extends Component {
    render() {
        const bird = birds.filter(obj => {
            console.log(this.props.match.params.name);
            return obj.url === this.props.match.params.name;
          })[0]
        return (
            <div>
              <h1>{bird.name}</h1>
              <img src={bird.imagelink}/>
              <p>{bird.scientific}</p>
              <p>Order : {bird.order}</p>
              <p>Family : {bird.family}</p>
              <p>Length : {bird.length}</p>
              <p>Weight : {bird.weight}</p>
            </div>
          );
    }
}
export default Bird;