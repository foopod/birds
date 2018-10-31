import React, { Component } from 'react';
import { Link } from "react-router-dom";
import birds from './../birds.json';

class Home extends Component {
    render() {
      return (
        <BirdList birds={birds} />
      )}
}


class BirdRow extends React.Component {
    render() {
      const name = this.props.name;
      const scientific = this.props.scientific;
      const url = this.props.url;
      return (
        <Link to={`/species/${url}`}>
            <div>
                <h4>{name}</h4>
                <p>{scientific}</p>
            </div>
        </Link>
      );
    }
  }
  
class BirdList extends React.Component {
    render() {
        const rows = [];
        const birdList = this.props.birds.sort(function (a, b) {
        return ('' + a.name).localeCompare(b.name);
        })
        birdList.forEach((bird) => {
            rows.push(
                <BirdRow
                name={bird.name}
                scientific={bird.scientific}
                url={bird.url}/>
            );
        });
        return rows;
    }
}

export default Home;