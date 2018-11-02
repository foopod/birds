const request = require('request');
const localforage = require('localforage');

function getBirds(callback) {
    if(localStorage.getItem('birdDB')){
        callback(JSON.parse(localStorage.getItem('birdDB')));
    } else {
        request('http://localhost:3000/birds.json', function (error, response, body){
            localStorage.setItem('birdDB',body);
            callback(JSON.parse(body));
        })
    }
}

var Utility = {
    getBirds: getBirds
 };

 export default Utility;