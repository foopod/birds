import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Utility from './../modules/Utility.js';

class Bird extends Component {
    render() {
        var bird = {};
        console.log(this.state);
        if(this.state && this.state.data){
            bird = this.state.data.filter(obj => {
                return obj.url === this.props.match.params.name;
              })[0]
        }
        return (
            <div className='birdContainer'>
            {this.state && this.state.data &&
            <div>
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
            }
            </div>
          );
    }
    componentDidMount(prevProps) {
        const self = this;
        Utility.getBirds(function (birds) {
            self.setState({ data: birds});
        })
        window.scrollTo(0, 0)
    }
}
export default Bird;