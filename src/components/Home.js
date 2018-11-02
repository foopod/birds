import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Utility from './../modules/Utility.js';

class Home extends Component {
    componentDidMount(){
        const self = this;
        Utility.getBirds(function (birds) {
            self.setState({ data: birds});
        })
    }
    render() {
      return (
          <div>
            {this.state && this.state.data &&
                <BirdList birds={this.state.data} />
            }
          </div>
      )}
}

class BirdRow extends React.Component {
    render() {
      const name = this.props.name;
      const scientific = this.props.scientific;
      const url = this.props.url;
      return (
        <Link to={`/species/${url}`}>
            <div className='birdListItem'>
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