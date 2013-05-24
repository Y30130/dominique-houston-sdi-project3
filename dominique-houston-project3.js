// alert("JavaScript works!");

// Dominique Houston
// SDI 1305
// Project 3
// Javascript Freestyle
/*

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
var performingArtist = performingArtists.artists[0].artistName; // Toggle Object Index Number to output different results
var tourDetailsName = tourDetails.tours[0].tourName; // Toggle Object Index Number to output different results
var tourDetailsYear = tourDetails.tours[0].year; // Toggle Object Index Number to output different results
var tourDetailsShows = tourDetails.tours[0].shows; // Toggle Object Index Number to output different results
var monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var showsBooked = true;
var soldOut = true;
var inCity = true;
var onTour = true;
var numOfSeasons = 4;
var seasons = ["Winter","Spring","Summer","Fall"];


// Convert Consolge Log into it's on Function, "Say"
var say = function(message) {console.log(message);}

// Procedure 
if (onTour == true) {
	say(performingArtist + " tour information is available:");
	say("");
} else {
	say(performingArtist + " tour information is not available.");
	return;
}


// Performing Artist Message (String Function)
if (performingArtist == "Britney Spears") {
	var tourName = tourDetails.tours[0].tourName;
	say(performingArtist + " headlined her first world tour " + tourName + " in " + tourDetailsYear + ".");
	say("");		
	}
	
if (performingArtist == "Christina Aguilera") {
	var tourName = tourDetails.tours[1].tourName;
	say(performingArtist + " headlined her first world tour " + tourName + " in " + tourDetailsYear + ".");
	say("");	
	}
	
if (performingArtist == "Beyonce") {
	var tourName = tourDetails.tours[2].tourName;
	say(performingArtist + " headlined her first world tour " + tourName + " in " + tourDetailsYear + ".");
	say("");	
}




// My Boolean Function
// Determine if concert tickets are avaiable
var checkShowStatus = function(inCity,showsBooked) {
	verifiedShow = (showsBooked && soldOut);
	if (inCity && showsBooked) {
		say(performingArtist + " concert tickets were available for purchase in " + tourDetailsYear + ".");
		say("");
		return true;
	}
	if (inCity || showsBooked) {
		say("Regretfully, concert tickets for " + performingArtists + " were available, but not in your area.");
		return false;
	}
	if (!showsBooked && !inCity){
		say("There were no shows booked for " + performingArtist + ".");
		return false;
	}
	return verifiedShow;
}

//
// My number function + While Loop
// Loop and count down how many concerts are left
var showCountdown = function (shows) {
	var shows = tourDetailsShows - 1;
	
	say("When the tour began there was a total of " + shows + " shows.");
	say("");
	while (shows > 0) {
		shows = shows - 1;
		if (shows > 0) {
			say("I remember hearing " + performingArtist +", that was a great show.");
			say(shows + " left on the tour.");
		} 
		else {
			say("We have reached the end of the tour. " + performingArtist +" sends thanks!");
		}
		say(" ");
	
	}
	return shows;
}

//
// My array function + For Loop
// 
var showCountUp = function(weeksPerforming,shows) {
	showNumber = tourDetails.tours[0].shows;
	for (var i = 0; i < tourDetails.tours[0].shows; i++){
		say(performingArtist + " performed a show.");
		
		if (i > shows) {
			say("There were still upcoming performances.");
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
		"avgCrowdSize"    : "50,000",
		"showDuration"    : "90",
		"songsPerShow"	  : "15",
		"songDuration"    : function() { // Method: Accessor
			minsPerSong = this.showDuration / this.songsPerShow;
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
showCountdown(tourDetails.tours[0].shows); // Number Function & While Loop | Toggle to match index of recording artist -- would like to know how to make this automatic
showCountUp(1,monthsOfTheYear); // Array Function & For Loop
offerDownload("Ooh La La","Scream & Shout"); // String Function 
concertSummary.songDuration();
concertSummary.setDuration(90);

// Returned Values
say("It is " + verifiedShow + " that the show was in your area."); // Returned Value from Boolean Function
say("");
say("There will be " + showNumber + " shows total."); // Returned Numerical Value from my Array Loop
say("");
say("There was a total of " + showNumber + " shows."); // Returned Value from my For While Loop
say("");
say("The average duration of each song performed will be " + minsPerSong + " minutes.");
say("");
say(downloadMessage); // Returned Value from String Function
say("");
say(concertSummary.showDuration); // Mutated Value