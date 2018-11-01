import React, { Component } from 'react';
import { Link } from "react-router-dom";
import birds from './../birds.json';

class Bird extends Component {
    render() {
        const bird = birds.filter(obj => {
            console.log(this.props.match.params.name);
            return obj.url === this.props.match.params.name;
          })[0]
        return (
            <div className='birdContainer'>
              <h2>{bird.name}</h2>
              <img src={bird.imagelink}/>
              <div className='data'>
                <div>
                    <span className='scientific'>{bird.scientific}</span>
                </div>
                <div>
                    <span className='attribute'>Order : </span>
                    <span className='value'>{bird.order}</span>
                </div>
                <div>
                    
                    <span className='attribute'>Family : </span>
                    <span className='value'>
                        <Link to={`/family/${bird.family}`}>
                            {bird.family}
                        </Link>
                    </span>
                </div>
                <div>
                    <span className='attribute'>NZ Status : </span>
                    <span className='value'>{bird.nzstatus}</span>
                </div>
                <div>
                    <span className='attribute'>Conservation Status : </span>
                    <span className='value'>{bird.conservationstatus}</span>
                </div>
                <div>
                    <span className='attribute'>Length : </span>
                    <span className='value'>{bird.length}</span>
                </div>
                <div>
                    <span className='attribute'>Weight : </span>
                    <span className='value'>{bird.weight}</span>
                </div>
              </div>
              <div className='detailedInfo' dangerouslySetInnerHTML={{__html: bird.detail}}></div>
            </div>
          );
    }
    componentDidMount(prevProps) {
        window.scrollTo(0, 0)
      }
}
export default Bird;