import React, { Component } from 'react';
import birds from './../birds.json';
import Home from './Home.js';
import { BrowserRouter as Route, Switch } from "react-router-dom";

class Bird extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/species' component={Home}/>
                <Route path='/species/:name' component={BirdPage}/>
            </Switch>
        );
    }
}

function BirdPage(){
    return (                                                
        <h1>stuff</h1>
    );
}

export default Bird;