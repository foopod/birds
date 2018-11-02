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
    filterList = (event) =>{
        this.setState({ filter : event.target.value.toLowerCase()});
    }
    render() {
      const filter = '';
      return (
          <div>
            <input className='search' type='text' onChange={this.filterList}/>
            {this.state && this.state.data &&
                <BirdList birds={this.state.data} filter={this.state.filter}/>
            }
          </div>
      )}
}

class BirdRow extends React.Component {
    render() {
      const name = this.props.name;
      const scientific = this.props.scientific;
      const url = this.props.url;
      const imagelink = this.props.imagelink;
      return (
        <Link to={`/species/${url}`}>
            
            <div className='birdListItem'>
                <div className='birdListImage'>
                    <img src={imagelink}/>
                </div>
                <div className='birdListItemText'>
                    <h4>{name}</h4>
                    <p>{scientific}</p>
                </div>
            </div>
        </Link>
      );
    }
  }
  
class BirdList extends React.Component {
    render() {
        const rows = [];
        var birdList = this.props.birds;
        const filter = this.props.filter;
        if(filter && filter.length>0){
            birdList = birdList.filter(function(item){
                return item.name.toLowerCase().search(
                  filter.toLowerCase()) !== -1;
              });
        }
        birdList = birdList.sort(function (a, b) {
            return ('' + a.name).localeCompare(b.name);
        })
        birdList.forEach((bird) => {
            rows.push(
                <BirdRow
                name={bird.name}
                scientific={bird.scientific}
                url={bird.url}
                imagelink={bird.imagelink}/>
            );
        });
        return rows;
    }
}

export default Home;