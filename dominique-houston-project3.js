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
			"artistName": "Britney Spears"
		},
		
		{
			"artistName": "Christina Aguilera"
		},
		
		{
			"artistName": "Beyonce"
		}
	]
};
// Tour Details
var tourDetails = {
	"tours": [
		{
		"artistName": "Britney Spears",
		"tourName" : "\"Oops I Did It Again Tour\"", 
		"shows": "90",
		"legs": "2",
		"year" : "2000",
		"worldTour" : "true",
		"debutTour" : "false"
		},

		{
		"artistName": "Christina Aguilera",
		"tourName" : "\"Christina Aguilera in Concert\"", 
		"shows": "81",
		"legs" : "4",
		"year" : "2000",
		"worldTour" : "true",
		"debutTour" : "true"
		},

		{
		"artistName": "Beyonce",
		"tourName" : "\"The Beyonce Experience\"", 
		"shows": "97", 
		"legs" : "5",
		"year" : "2007",
		"worldTour" : "true",
		"debutTour" : "false"
		}
		]
};


// My Global variables
var performingArtist = performingArtists.artists[0].artistName;
var tourDetailsName = tourDetails.tours[0].tourName;
var tourDetailsYear = tourDetails.tours[0].year;
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
if (performingArtist == "Britney Spears") {
	var tourName = tourDetails.tours[0].tourName;
	say("The queen, " + performingArtist + ", is going on tour!");
	say("");
	say(performingArtist + " headlined her first world tour " + tourName + " in " + tourDetailsYear + ".");
	say("");		
	}
	
if (performingArtist == "Christina Aguilera") {
	var tourName = tourDetails.tours[1].tourName;
	say(performingArtist + " is going on to pussy pop on tour!");
	say("");
	say(performingArtist + " headlined her first world tour " + tourName + " in " + tourDetailsYear + ".");
	say("");	
	}
if (performingArtist == "Beyonce") {
	var tourName = tourDetails.tours[2].tourName;
	say(performingArtist + " is going on tour!");
	say("");
	say(performingArtist + " headlined her first world tour " + tourName + " in " + tourDetailsYear + ".");
	say("");	
}




// My Boolean Function
// Determine if concert tickets are avaiable
var checkShowStatus = function(inCity,showsBooked) {
	verifiedShow = (showsBooked && soldOut);
	if (inCity && showsBooked) {
		say("Congratulations! " + performingArtist + " concert tickets are available for purchase.");
		say("");
		return true;
	}
	if (inCity || showsBooked) {
		say("Regretfully, concert tickets for " + performingArtists + " are available, but not in your area. Please try another location.");
		return false;
	}
	if (!showsBooked && !inCity){
		say("We do not have any shows booked for " + performingArtist + ".");
		return false;
	}
	return verifiedShow;
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
			say( performingArtist +", that was a great show.");
			say(shows + " left on the tour.");
			if (shows == 1) {
			say("");
					say("This is the last show. Hope you've got your tickets!");
				}
		} 
		else {
			say("We have reached the end of the tour. 	" + performingArtist +" sends thanks!");
		}
		say(" ");
	
	}
	return countShows;
}

//
// My array function + For Loop
// 
var showCountUp = function(weeksPerforming,monthsOfTheYear) {
	showNumber = monthsOfTheYear.push("Nevember");
	for (var i = 0; i < monthsOfTheYear.length; i++){
		say(performingArtist + " will be performing " + weeksPerforming + " show this " + monthsOfTheYear[i] + ".");
		
		if (i > monthsOfTheYear) {
			say("There are still upcoming performances.");
		}
		say(" ");
	}
	return showNumber;
}

// String function
var offerDownload = function(freeSong,freeVideo) {
	
if (performingArtist == "Britney Spears") {
		freeSong = "Ooh La La";
		freeVideo = "Scream & Shout";
	}
if (performingArtist == "Christina Aguilera") {
		freeSong = "Feel This Moment";
		freeVideo = "Your Body";
	}
if (performingArtist == "Beyonce") {
		freeSong = "Grown Woman";
		freeVideo = "Grown Woman (Live From Paris)";
	}	
	downloadMessage = "Download " + freeSong + " (audio) and " + freeVideo + " (video) for free.";	
	return downloadMessage;
	}

// Concert Summary (Object Function + Accesor & Mutator)
var concertSummary = {  
		"avgCrowdSize"       : "50,000",
		"showDuration"    : "90",
		"songsPerShow"	  : "15",
		"songDuration"    : function() { // Method: Accessor
			var minsPerSong = this.showDuration / this.songsPerShow;
			return minsPerSong;
		},
		
		"setDuration"    : function(newDuration)
		{ // Method: Mutator
			this.showDuration = newDuration;
			return concertSummary.showDuration;		
		}
};


/////////////////////////////////////////////////////////////////////////////////////////////

// Function Execution
checkShowStatus(true,true); // Boolean Function (toggle values to output different results)
showCountdown(12); // Number Function & While Loop
showCountUp(1,monthsOfTheYear); // Array Function & For Loop
offerDownload("Ooh La La","Scream & Shout"); // String Function 


// Returned Values
say("It is " + verifiedShow + " that the show has been verified in your area."); // Returned Value from Boolean Function
say("");
say("There will be " + showNumber + " shows total."); // Returned Numerical Value from my Array Loop
say("");
say("With the addition of the new month, there will be " + showNumber + " shows."); // Returned Value from my For While Loop
say("");
say("The average duration of each song performed will be " + concertSummary.songDuration());
say("");
say(downloadMessage); // Returned Value from String Function
