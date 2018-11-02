const request = require('request');
const async = require('async');
const fs = require("fs");

var birds = require('./birds.json')

var proxyUrl = "http://" + "joshiel" + ":" + "squidVision12" + "@" + "172.30.31.50" + ":" + "3128";
var proxiedRequest = request.defaults({'proxy': proxyUrl});
// var proxiedRequest = request.defaults();

async.each(birds, function(bird, callback) {
    var file='';
    if(bird.imagelink.substr(bird.imagelink.length - 3) === 'jpg'){
        file = 'jpg';
    } else {
        file = 'png';
    }
    proxiedRequest(bird.imagelink).pipe(fs.createWriteStream("./../public/images/birdProfiles/"+bird.url + "." + file));

  }, function(err, res) {
    
  });