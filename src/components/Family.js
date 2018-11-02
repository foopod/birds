import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Utility from './../modules/Utility.js';

class Groups extends Component {
    render() {
        var rows = [];
        if(this.state && this.state.data){
            const families = new Set();
            this.state.data.forEach((bird) => {
                families.add(bird.family);
            });
            families.forEach((family) => {
                rows.push(
                    <FamilyRow family={family}/>
                );
            });
        }
        return rows
    }
    componentDidMount(prevProps) {
        const self = this;
        Utility.getBirds(function (birds) {
            self.setState({ data: birds});
        })
        window.scrollTo(0, 0)
    }
}

class FamilyRow extends React.Component {
    render() {
      const family = this.props.family;
      return (
        <div>
            <Link to={`/family/${family}`}>
                <p>{family}</p>
            </Link>
        </div>
      );
    }
  }

export default Groups;