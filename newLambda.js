"use strict";
//https://stackoverflow.com/questions/16383795/difference-between-module-exports-and-exports-in-the-commonjs-module-system
//var Alexa = require("alexa-sdk");
var bodyRequest = require("./request");
// var getBody = body.getBody;

var someFunction = function() {
	var bod = bodyRequest.getJson();
	console.log(bod); //yields undefined bc async

};

someFunction();

// var handlers = { //map the skill's intents
// 	"plantsDoingWellIntent": function () {
// 		if(body.output.readings[0].humidity >= body.output.humidityMin && body.output.readings[0].humidity <= body.output.humidityMax &&
// 			body.output.readings[0].temperature >= body.output.tempMin && body.output.readings[0].temperature <= body.output.tempMax &&
// 			body.output.readings[0].sunlight >= body.output.sunlightMin && body.output.readings[0].sunlight <= body.output.sunlightMax &&
// 			body.output.readings[0].moisture >= body.output.moistureMin && body.output.readings[0].moisture <= body.output.moistureMax){
// 				this.response.speak("Hello! Your "+ body.name +" plant is doing well. All of its readings are within ideal range."); //string response 
// 				this.emit(":responseReady"); //triggers the Lambda function to respond
// 		}else{
// 			this.response.speak("Sorry, your " + body.name + " plants is not doing well. Its readings are not within ideal range."); //string response 
// 			this.emit(":responseReady"); //triggers the Lambda function to respond
// 		}
// 	}
// 	"lastReadingIntent": function () {
// 		this.response.speak("Hello! These are the readings for your " + + "plant" +
// 			"Humidity is at " + body.output.readings[0].humidity + " percent." + 
// 			"Temperature is at "+ body.output.readings[0].temperature + " Celsius." +
// 			"Sunlight is at " + body.output.readings[0].sunlight + " percent." +
// 			"Moisture is at " + body.output.readings[0].moisture + " percent." +
// 			"Battery is at " + body.output.readings[0].battery + "percent.");
// 		this.emit(":responseReady"); //triggers the Lambda function to respond
//}
// 	"plantsNotDoingWellIntent": function () {
		
// 			this.response.speak("Hello! Your "+ body.output.name +" plant is not doing well. Its readings are not within ideal range."); //string response 
// 			this.emit(":responseReady"); //triggers the Lambda function to respond

// 			this.response.speak("Hello! All your "+ body.output.name +" plant is actually doing well. All of its readings are within ideal range."); //string response 
// 			this.emit(":responseReady"); //triggers the Lambda function to respond
// 	}
// 	"LaunchRequest": function () { //to handle when the user's request doesn't map to an intent
// 		this.response.speak("Welcome to Sprout Labs!");
// 		this.emit(":responseReady");
// 	}
// };

// exports.handler = function(event, context, callback) { //function that AWS Lambda calls every time Alexa uses your skill
// 	  // Set up the Alexa object
// 		var alexa = Alexa.handler(event, context);
	 
// 	  // Register Handlers
// 	  alexa.registerHandlers(handlers); 

// 	  // Start our Alexa code
// 	  alexa.execute(); 
// }