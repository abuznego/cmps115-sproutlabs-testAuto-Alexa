	//enclose in nodejs export so that you can use this in index.js

	const request = require('request');

	// request('http://192.241.215.123:3030/api/nodes/1587?api_token=jw2A3Nd7ETLEGug2HAjv3BnfALelFB', { json: true }, (err, res, body) => {
	// 	if (err) { return console.log(err); }
	// 	// requestBody = body;
	// });

	//const fs = require('fs');
	
	const getJson = (callback) => {
		request.get('http://192.241.215.123:3030/api/nodes/1587?api_token=jw2A3Nd7ETLEGug2HAjv3BnfALelFB', { json: true })
			   .on('response', (res) => { console.log(res.data) })
	}

getJson();



	// const x = 1

	// let x = 1
	//  for (let i = 1; i < .... ; i++){}

	// // var
	// //  for (var i = 1; i < .... ; i++)}{}
	// //  i 

	// // };
	// module.exports.getJson = getJson;