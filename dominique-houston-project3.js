// alert("JavaScript works!");

// Dominique Houston
// SDI 1305
// Project 3
// Javascript Freestyle
/*

A recording artist var recordingArist = "Britney Spears" is going on tour and will be performing one secret show per month for one year. showsPerYear = 12. monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].

Currently Britney Spears is the only artist doing such tour, so if you provide any other artist name, we will not be able to fully assist you at this time if (recordingAritst == "Britney Spears"). We will need to verify that she is going to be near the location you provide, and also check to see if tickets are still availble. (Boolean function)

For each month that has passed, the number of shows left will decrease. (Number function and while loop)

We will itemize each month and the number of shows she will perform to clear up any confusion. (Array function and For Loop)

We believe in taking chances, so we have create a new month "Nevember" to celebrate the release of Britney's new album. (Array Function and For Loop)

We will offer a free download after your ticket purchase. (String Function)

*/
// JSON
var performingArtists = {
	"artists": [
		{
			"artistFirstName": "Britney",
			"artistLastName" : "Spears"
		},
		{
			"artistFirstName": "Christina",
			"artistLastName" : "Aguilera"
		},
		{
			"artistFirstName": "Beyonce",
			"artistLastName" : "Knowles"
		}
	]
};

// Tour Details
var tourDetails = [
		{
		"name" : "Oops I Did It Again Tour", 
		"shows": "90", 
		"year" : "2000",
		"worldTour" : "true",
		"debutTour" : "false"
		},

		{
		"name" : "Christina Aguilera in Concert", 
		"shows": "81", 
		"year" : "2000",
		"worldTour" : "true",
		"debutTour" : "true"
		},

		{
		"name" : "The Beyonce Experience", 
		"shows": "97", 
		"year" : "2007",
		"worldTour" : "true",
		"debutTour" : "false"
		}
]

// My Global variables
var recordingArtist = "Britney Spears";
var showsPerMonth = 1;
var songsPerShow = 6;
var showDurationMins = 30;
var weeksPerforming = 12;
var monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var showsBooked = true;
var soldOut = true;
var inCity = true;
var onTour = true;
var numOfSeasons = 4;
var seasons = ["Winter","Spring","Summer","Fall"];


// Convert Consolge Log into it's on Function, "Say"
var say = function(message) {console.log(message);}

// My procedure 
if (recordingArtist == "Britney Spears") {
	say(recordingArtist + " is going on tour!");
	say("");
} 
else {
	console.log("We do not have information for that artist.");
};


// My Boolean Function
// Determine if concert tickets are avaiable
var checkShowStatus = function(inCity,showsBooked) {
	var verifiedShow = showsBooked && soldOut;
	if (inCity && showsBooked) {
		say("Congratulations! " + recordingArtist + " concert tickets are available for purchase.");
		say("");
		return verifiedShow;
	}
	if (inCity || showsBooked) {
		say("Regretfully, concert tickets for " + recordingArtist + " are available, but not in your area. Please try another location.");
		return false;
	}
	if (!showsBooked && !inCity){
		say("We do not have any shows booked for " + recordingArtist + ".");
		return false;
	}
}

//
// My number function + While Loop
// Loop and count down how many concerts are left
var showCountdown = function (shows) {
	var countShows = shows - 1;
	
	say("The tour begins today. We have a total of " + shows + " shows.");
	say("");
	while (shows > 0) {
		shows = shows - 1;
		if (shows > 0) {
			say( recordingArtist +", that was a great show.");
			say(shows + " left on the tour.");
			if (shows == 1) {
			say("");
					say("This is the last show. Hope you've got your tickets!");
				}
		} 
		else {
			say("We have reached the end of the tour. 	" + recordingArtist +" sends thanks!");
		}
		say(" ");
	
	}
	return countShows;
}

//
// My array function + For Loop
// 
var showCountUp = function(weeksPerforming,monthsOfTheYear) {
	var showNumber = monthsOfTheYear.push("Nevember");
	for (var i = 0; i < monthsOfTheYear.length; i++){
		say(recordingArtist + " will be performing " + weeksPerforming + " show this " + monthsOfTheYear[i] + ".");
		
		if (i > monthsOfTheYear) {
			say("There are still upcoming performances.");
		}
		say(" ");
	}
	return showNumber;
}

// String function

var offerDownload = function(freeSong,freeVideo) {
	var downloadMessage = "Download " + freeSong + " or " + freeVideo + " for free.";
	
	return downloadMessage;
	}

/////////////////////////////////////////////////////////////////////////////////////////////

// Function Execution
checkShowStatus(true,true); // Boolean Function (toggle values to output different results)
showCountdown(12); // Number Function & While Loop
showCountUp(1,monthsOfTheYear); // Array Function & For Loop
offerDownload("Ooh La La","Scream & Shout");

// Returned Values
say("It is " + verifiedShow + " that the show has been verified in your area."); // Returned Value from Boolean Function
say("There will be " + showNumber + " shows total."); // Returned Numerical Value from my Array Loop
say("With the addition of the new month, there will be " + showNumber + " shows."); // Returned Value from my For While Loop
say(downloadMessage); // Returned Value from String Function