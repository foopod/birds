const cheerio = require('cheerio');
const request = require('request');
const async = require('async');
const fs = require("fs");

var proxyUrl = "http://" + "joshiel" + ":" + "squidVision12" + "@" + "172.30.31.50" + ":" + "3128";
// var proxiedRequest = request.defaults({'proxy': proxyUrl});
var proxiedRequest = request.defaults();

var birds = [];
var urls = [];

var pages = [];

for (var i = 0; i < 50; i++) {
    pages.push('http://nzbirdsonline.org.nz/name-search?title=&field_other_names_value=&field_search_scientific_name_value=&page='+i)
}

async.each(pages, function(page, callback) {
    proxiedRequest(page, function (error, response, body) {
        var $ = cheerio.load(body);
        $(".search-result-title a").each(function(i, elem) {
            urls.push($(elem).attr('href'));
        });
        if(error!=null){
            console.log("Page Error - " + page);
        }
        callback();
        
      // call cb here, first argument is the error or null, second one is the result
    });

  }, function(err, res) {
    // console.log(urls.length);
    async.eachLimit(urls, 1, function(url, callback) {
        proxiedRequest('http://nzbirdsonline.org.nz'+url, function (error, response, body) {
            var $ = cheerio.load(body);
            var bird = {};
            bird['name'] = $(".bird-title-info h2").text();
            bird['url'] = url.split("/species/")[1];
            // console.log(url + "_" +bird['name']);
            var birdHeaderList= [];
            $(".bird-header-info a").each(function(i, elem) {
                birdHeaderList.push($(elem).text());
            });
            bird['scientific'] = $("h3").text();
            bird['order'] = birdHeaderList[0];
            bird['family'] = birdHeaderList[1];
            bird['nzstatus'] = birdHeaderList[2];
            bird['conservationstatus'] = birdHeaderList[3];
            bird['imagelink'] = $(".main-bird-image a img").attr('src');

            var birdSidebarList= [];
            $(".sidebar-bird .important-info").each(function(i, elem) {
                birdSidebarList.push($(elem).text());
            });
            if(birdSidebarList[0] != undefined){
                bird['length'] = birdSidebarList[0].split("Length: ")[1];
            }
            if(birdSidebarList[1] != undefined){
                bird['weight'] = birdSidebarList[1].split("Weight: ")[1];
            }

            bird['detail'] = $("#species-info-tab").html();
            
            birds.push(bird);
            if(bird['name'].length ==0){
                console.log("Bird Error - " + url);
            }
            callback();
            
          // call cb here, first argument is the error or null, second one is the result
        });
      }, function(err, res) {
        // this gets called when all requests are complete
        // res is an array with the results
        // console.log(birds);
        saveToFile(birds);
      });
  });

function saveToFile(data){
    var json = JSON.stringify(data);
    fs.writeFile('birds.json', json,function(err){
        if(err) throw err;
      });
}