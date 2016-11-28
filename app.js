//const yargs = require('yargs');

//
//const geocode = require('./geocode/geocode.js');
//
//const argv = yargs
//        .options({
//            a: {
//                demand: true,
//                alias: 'address',
//                describe: 'Address to fetch weather for',
//                string: true
//            }
//        })
//        .help()
//        .alias('help', 'h')
//        .argv;
//
//geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//    if (errorMessage){
//        console.log(errorMessage);
//    } else {
//        console.log(JSON.stringify(results,undefined,2));
//    }  
//});

//3c60dc68105ef8a51caa436577f2a59e

const request = require('request');

request({
url: 'https://api.darksky.net/forecast/3c60dc68105ef8a51caa436577f2a59e/39.286427,-77.22901929999999',
        json: true
}, (error, response, body) => {
if (!error && response.statusCode === 200) {
console.log(body.currently.temperature);
        } else {
console.log('Unable to fetch weather.');
        }
        });