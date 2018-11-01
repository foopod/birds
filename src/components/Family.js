import React, { Component } from 'react';
import birds from './../birds.json';

class Groups extends Component {
    render() {
        return (
            <FamilyList />
        );
    }
}

class FamilyRow extends React.Component {
    render() {
      const family = this.props.family;
      return (
        <div>
            <p>{family}</p>
        </div>
      );
    }
  }
  
class FamilyList extends React.Component {
    render() {
        const families = new Set();
        birds.forEach((bird) => {
            families.add(bird.family);
        });
        const rows = [];
        families.forEach((family) => {
            rows.push(
                <FamilyRow family={family}/>
            );
        });
        return rows
    }
}

export default Groups;