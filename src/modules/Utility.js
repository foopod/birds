const request = require('request');
// const localforage = require('localforage');

function getBirds(callback) {
    if(localStorage.getItem('birdDB')){
        callback(JSON.parse(localStorage.getItem('birdDB')));
    } else {
        request(window.location.host+'/birds.json', function (error, response, body){
            localStorage.setItem('birdDB',body);
            callback(JSON.parse(body));
        })
    }
}

var Utility = {
    getBirds: getBirds
 };

 export default Utility;