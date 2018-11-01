import React, { Component } from 'react';
import { Link } from "react-router-dom";
import birds from './../birds.json';

class FamilyOfBirds extends Component {
    render() {
        console.log(this.props.match.params.family)
        var birdList = birds.filter(obj => {
            return obj.family === this.props.match.params.family;
        })
        console.log(birdList)
        const rows = [];
        birdList.forEach((bird) => {
            rows.push(
                <BirdRow
                name={bird.name}
                imagelink={bird.imagelink}
                url={bird.url}/>
            );
        });
        return rows;
    }
    componentDidMount(prevProps) {
        window.scrollTo(0, 0)
    }
}

class BirdRow extends React.Component {
    render() {
      const url = this.props.url;
      const imagelink = this.props.imagelink;
      return (
        <Link to={`/species/${url}`}>
            <img className='imageinlist' src={imagelink}/>
        </Link>
      );
    }
  }

export default FamilyOfBirds;