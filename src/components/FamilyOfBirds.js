import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Utility from './../modules/Utility.js';

class FamilyOfBirds extends Component {
    render() {
        const rows = [];
        if(this.state && this.state.data){
            var birdList = this.state.data.filter(obj => {
                return obj.family === this.props.match.params.family;
            })
            birdList.forEach((bird) => {
                rows.push(
                    <BirdRow
                    name={bird.name}
                    imagelink={bird.imagelink}
                    url={bird.url}/>
                );
            });
        }
        return rows;
    }
    componentDidMount(prevProps) {
        const self = this;
        Utility.getBirds(function (birds) {
            self.setState({ data: birds});
        })
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