'use strict';

const sprintf = require("sprintf-js").sprintf;

// Required by Alexa
var Alexa = require('alexa-sdk');
var APP_ID = 'amzn1.ask.skill.292c95e5-0cb7-49c3-995d-82a35be38e3f';

var DBJAB_GigGuide = 
[
    {
      "Artist": "Antoinette McAllister Trio",
      "Day": "Friday",
      "Venue": "Alexander Arms",
      "StartTime": "18:00",
      "EndTime": "20:00"
    },
    {
      "Artist": "Alan McKelvey Trio",
      "Day": "Friday",
      "Venue": "Alexander Arms",
      "StartTime": "21:00",
      "EndTime": "23:00"
    },
    {
      "Artist": "Limavady Big Band",
      "Day": "Saturday",
      "Venue": "Alexander Arms",
      "StartTime": "14:00",
      "EndTime": "16:00"
    },
    {
      "Artist": "Martello Jazz Band",
      "Day": "Saturday",
      "Venue": "Alexander Arms",
      "StartTime": "17:00",
      "EndTime": "19:00"
    },
    {
      "Artist": "The Armstrong Experience",
      "Day": "Saturday",
      "Venue": "Alexander Arms",
      "StartTime": "22:00",
      "EndTime": "LATE"
    },
    {
      "Artist": "Kenny and Friends",
      "Day": "Sunday",
      "Venue": "Alexander Arms",
      "StartTime": "16:00",
      "EndTime": "18:00"
    },
    {
      "Artist": "Modern Swing Collective",
      "Day": "Sunday",
      "Venue": "Banters",
      "StartTime": "15:00",
      "EndTime": "17:00"
    },
    {
      "Artist": "Mark Braidner",
      "Day": "Sunday",
      "Venue": "Banters",
      "StartTime": "19:00",
      "EndTime": "21:00"
    },
    {
      "Artist": "Jazz Lite",
      "Day": "Friday",
      "Venue": "Limavady Recreation Club",
      "StartTime": "19:00",
      "EndTime": "21:00"
    },
    {
      "Artist": "Kenny and Frankie",
      "Day": "Saturday",
      "Venue": "Limavady Recreation Club",
      "StartTime": "19:00",
      "EndTime": "21:00"
    },
    {
      "Artist": "The Guinness Jazz Band",
      "Day": "Sunday",
      "Venue": "Carrowmena",
      "StartTime": "13:00",
      "EndTime": "15:00"
    },
    {
      "Artist": "Portabello",
      "Day": "Friday",
      "Venue": "Corner Bar - Back",
      "StartTime": "23:00",
      "EndTime": "LATE"
    },
    {
      "Artist": "The Catfish Blues Orchestra",
      "Day": "Saturday",
      "Venue": "Corner Bar - Back",
      "StartTime": "23:00",
      "EndTime": "LATE"
    },
    {
      "Artist": "Clandestinos",
      "Day": "Sunday",
      "Venue": "Corner Bar - Back",
      "StartTime": "22:00",
      "EndTime": "LATE"
    },
    {
      "Artist": "Lonesome Highway Blues Band",
      "Day": "Friday",
      "Venue": "Corner Bar - Front",
      "StartTime": "20:00",
      "EndTime": "22:00"
    },
    {
      "Artist": "Hot Tamales",
      "Day": "Saturday",
      "Venue": "Corner Bar - Front",
      "StartTime": "18:00",
      "EndTime": "20:00"
    },
    {
      "Artist": "The Electric Vultures",
      "Day": "Saturday",
      "Venue": "Corner Bar - Front",
      "StartTime": "22:00",
      "EndTime": "LATE"
    },
    {
      "Artist": "High Heel Converse",
      "Day": "Sunday",
      "Venue": "Corner Bar - Front",
      "StartTime": "14:00",
      "EndTime": "16:00"
    },
    {
      "Artist": "The Soul Doctors",
      "Day": "Saturday",
      "Venue": "Crown Bar",
      "StartTime": "16:00",
      "EndTime": "18:00"
    },
    {
      "Artist": "Daylight Wobblies",
      "Day": "Sunday",
      "Venue": "Crown Bar",
      "StartTime": "18:00",
      "EndTime": "20:00"
    },
    {
      "Artist": "Clara Rose Band",
      "Day": "Friday",
      "Venue": "Douglas' Bar",
      "StartTime": "21:00",
      "EndTime": "23:00"
    },
    {
      "Artist": "Blackbird and Crow",
      "Day": "Saturday",
      "Venue": "Douglas' Bar",
      "StartTime": "18:00",
      "EndTime": "20:00"
    },
    {
      "Artist": "The Willie Byrne Band",
      "Day": "Saturday",
      "Venue": "Douglas' Bar",
      "StartTime": "22:00",
      "EndTime": "LATE"
    },
    {
      "Artist": "The Jambons",
      "Day": "Sunday",
      "Venue": "Douglas' Bar",
      "StartTime": "15:00",
      "EndTime": "17:00"
    },
    {
      "Artist": "Grand Camaros",
      "Day": "Sunday",
      "Venue": "Douglas' Bar",
      "StartTime": "21:00",
      "EndTime": "23:00"
    },
    {
      "Artist": "Susan Tomelty Band",
      "Day": "Friday",
      "Venue": "Frank Owens : Yard",
      "StartTime": "19:00",
      "EndTime": "21:00"
    },
    {
      "Artist": "The Catfish Blues Orchestra",
      "Day": "Friday",
      "Venue": "Frank Owens : Yard",
      "StartTime": "11:00",
      "EndTime": "LATE"
    },
    {
      "Artist": "Rose Room",
      "Day": "Saturday",
      "Venue": "Frank Owens : Yard",
      "StartTime": "14:00",
      "EndTime": "16:00"
    },
    {
      "Artist": "Modern Swing Collective",
      "Day": "Saturday",
      "Venue": "Frank Owens : Yard",
      "StartTime": "18:00",
      "EndTime": "20:00"
    },
    {
      "Artist": "Clandestinos",
      "Day": "Saturday",
      "Venue": "Frank Owens : Yard",
      "StartTime": "22:00",
      "EndTime": "LATE"
    },
    {
      "Artist": "Men n Black",
      "Day": "Sunday",
      "Venue": "Frank Owens : Yard",
      "StartTime": "14:00",
      "EndTime": "16:00"
    },
    {
      "Artist": "Little Wilgar and The Crackpot Preachers",
      "Day": "Friday",
      "Venue": "Grannie Annies",
      "StartTime": "21:00",
      "EndTime": "23:00"
    },
    {
      "Artist": "Mark Black Band",
      "Day": "Saturday",
      "Venue": "Grannie Annies",
      "StartTime": "17:00",
      "EndTime": "19:00"
    },
    {
      "Artist": "BeeKeepers BluesBand",
      "Day": "Saturday",
      "Venue": "Grannie Annies",
      "StartTime": "21:00",
      "EndTime": "23:00"
    },
    {
      "Artist": "Limavady Big Band",
      "Day": "Sunday",
      "Venue": "Grannie Annies",
      "StartTime": "16:00",
      "EndTime": "18:00"
    },
    {
      "Artist": "Eilidh Patterson",
      "Day": "Sunday",
      "Venue": "Keady Clachan",
      "StartTime": "15:00",
      "EndTime": "17:00"
    },
    {
      "Artist": "Hooker",
      "Day": "Saturday",
      "Venue": "L.C.D.I.",
      "StartTime": "14:00",
      "EndTime": "16:00"
    },
    {
      "Artist": "The Palais Swing Band",
      "Day": "Friday",
      "Venue": "Limavady Cricket and Rugby Club",
      "StartTime": "20:00",
      "EndTime": "22:00"
    },
    {
      "Artist": "Hip Joint DC",
      "Day": "Saturday",
      "Venue": "Limavady Cricket and Rugby Club",
      "StartTime": "21:00",
      "EndTime": "23:00"
    },
    {
      "Artist": "Joan Talbot and Jazz Gazette",
      "Day": "Sunday",
      "Venue": "Roe Park Resort",
      "StartTime": "14:00",
      "EndTime": "16:00"
    },
    {
      "Artist": "Kaz Hawkins",
      "Day": "Wednesday",
      "Venue": "Roe Valley Arts and Cultural Centre",
      "StartTime": "19:30",
      "EndTime": "22:30"
    },
    {
      "Artist": "Rose Room",
      "Day": "Friday",
      "Venue": "The Belmont",
      "StartTime": "19:00",
      "EndTime": "21:00"
    },
    {
      "Artist": "The Hardchargers",
      "Day": "Friday",
      "Venue": "The Belmont",
      "StartTime": "23:00",
      "EndTime": "LATE"
    },
    {
      "Artist": "Grand Camaros",
      "Day": "Saturday",
      "Venue": "The Belmont",
      "StartTime": "19:00",
      "EndTime": "21:00"
    },
    {
      "Artist": "Clara Rose Band",
      "Day": "Saturday",
      "Venue": "The Belmont",
      "StartTime": "23:00",
      "EndTime": "LATE"
    },
    {
      "Artist": "Espresso Jazz",
      "Day": "Friday",
      "Venue": "The Depot - Bar",
      "StartTime": "20:00",
      "EndTime": "22:00"
    },
    {
      "Artist": "Fiona Scott Trotter Band",
      "Day": "Saturday",
      "Venue": "The Depot - Bar",
      "StartTime": "20:00",
      "EndTime": "22:00"
    },
    {
      "Artist": "Mark Braidner Band",
      "Day": "Friday",
      "Venue": "The Depot - Venue",
      "StartTime": "22:00",
      "EndTime": "LATE"
    },
    {
      "Artist": "Soulseekers",
      "Day": "Saturday",
      "Venue": "The Depot - Venue",
      "StartTime": "11:00",
      "EndTime": "LATE"
    },
    {
      "Artist": "Tony Villiers and The Villains",
      "Day": "Sunday",
      "Venue": "The Depot - Venue",
      "StartTime": "17:00",
      "EndTime": "19:00"
    },
    {
      "Artist": "Ronnie Greer",
      "Day": "Thursday",
      "Venue": "The Depot - Venue",
      "StartTime": "22:00",
      "EndTime": "LATE"
    },
    {
      "Artist": "The Willie Byrne Band",
      "Day": "Sunday",
      "Venue": "The Newton",
      "StartTime": "19:00",
      "EndTime": "21:00"
    },
    {
      "Artist": "Rab McCullough",
      "Day": "Saturday",
      "Venue": "The Thatch",
      "StartTime": "16:00",
      "EndTime": "18:00"
    },
    {
      "Artist": "Susan Tomelty Band",
      "Day": "Saturday",
      "Venue": "The Thatch",
      "StartTime": "20:00",
      "EndTime": "22:00"
    },
    {
      "Artist": "Thank Funk",
      "Day": "Sunday",
      "Venue": "The Thatch",
      "StartTime": "22:00",
      "EndTime": "LATE"
    }
  ];
              
// Define the langauge strings to be used
var languageStrings = {
    "en": {
        "translation": {
            "SKILL_NAME" : "DannyBoyJazzAndBlues",
            "FESTIVAL_DATES_MESSAGE" : "This years festival will run between ",
            "HELP_MESSAGE" : "Hi, I am DeeBee, your Danny Boy Jazz and Blues Alexa assistant. I can tell you when this years festival is on or who is playing where on a specific day. What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with? Say something like Ask Danny Boy Jazz and Blues who is playing on Friday, or who is playing on Saturday in a particular venue",
            "STOP_MESSAGE" : "Hope to see you at this years festival, Goodbye!",
            "NOGIGSFOUND" : "I'm sorry but there are no further gigs at the time or location of your query. We hope you enjoyed the festival."
        }
    }
};


// Export the handler to make it available
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.appId = APP_ID;
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

function filterGigsOnDayAndLocations(day, location) {
    if(!day) {
        console.log("No valid day detected");
        return [];
    }

    var gigsOnRequestedDay = DBJAB_GigGuide.filter((gig) => {
        if(gig.Day.toUpperCase() == day.toUpperCase()) return true;
        return false;
    })

    var filteredGigs;

    if(location) {
        var gigsAtLocation = gigsOnRequestedDay.filter((gig) => {
            if(gig.Venue.toUpperCase().includes(location.toUpperCase())) return true;
            return false;
        })
        return gigsAtLocation;
    }
    else
        return gigsOnRequestedDay;
}

function createGigDetailsOutput(gigsJSONArray, singleVenue) {

    console.log("Creating output for", gigsJSONArray.length, "gigs at", singleVenue)
    console.log(gigsJSONArray);

    var responseString = "";

    var singleVenueText = [
        "%s will be playing from %s to %s <s> ",
        "%s will be on from %s to %s <s>",
        "%s will be doing their thing from %s to %s <s>"
    ]

    var multipleVenueText = [
        "%s will be playing in %s from %s to %s <s>",
        "%s will be in %s from %s to %s <s>",
        "%s will be doing their thing at %s from %s to %s <s>"
    ]

    var nextLine;

    if(singleVenue) {
        for(var i=0; i< gigsJSONArray.length; i++) {
            nextLine = singleVenueText[Math.floor(Math.random() * singleVenueText.length)];  
            responseString += sprintf(nextLine, gigsJSONArray[i].Artist, gigsJSONArray[i].StartTime, gigsJSONArray[i].EndTime);    
        }
    }
    else {
        for(var i=0; i< gigsJSONArray.length; i++) {
            nextLine = multipleVenueText[Math.floor(Math.random() * multipleVenueText.length)];    
            responseString += sprintf(nextLine, gigsJSONArray[i].Artist, gigsJSONArray[i].Venue, gigsJSONArray[i].StartTime, gigsJSONArray[i].EndTime);
        }
    }        

    console.log("Response:", responseString);

    return responseString;
}

// Define the handler and include the intents you want to work with
var handlers = {
    'festivalDatesIntent': function () {
        this.emit('getFestivalDates');
    },
    'getFestivalDates': function () {
      var outputMessage = this.t("FESTIVAL_DATES_MESSAGE") + process.env.thisYearsFestivalDates
      this.emit(':tellWithCard', outputMessage, this.t("SKILL_NAME"), outputMessage)
    },
    /////////////////////////////////////////////////
    'whoisplayingwhen': function () {
        this.emit('getWhoIsPlayingWhereAndWhen');
    },
    'getWhoIsPlayingWhereAndWhen': function () {

        console.log("Calling getWhoIsPlayingWhereAndWhen for ", dbjabDay, "and", dbjabVenue);

        var dbjabVenue;
        if(this.event.request.intent.slots.playingWhere.value) {
            dbjabVenue = this.event.request.intent.slots.playingWhere.resolutions.resolutionsPerAuthority[0].values[0].value.name.toUpperCase();
        }
        var dbjabDay = this.event.request.intent.slots.playingWhen.value.toUpperCase();

        console.log("Calling getWhoIsPlayingWhereAndWhen for day", dbjabDay, "and location", dbjabVenue);
        var responseData = filterGigsOnDayAndLocations(dbjabDay, dbjabVenue);

        var outputMessage;

        if(responseData.length == 0) {
            outputMessage = this.t("NOGIGSFOUND");
        }
        else {
            outputMessage = createGigDetailsOutput(responseData, dbjabVenue);
        }
        
        // outputMessage = this.t("Successfully called getWhoIsPlayingWhereAndWhen");
        this.emit(':tellWithCard', outputMessage, this.t("SKILL_NAME"), outputMessage)
    },
    /////////////////////////////////////////////////
    'AMAZON.HelpIntent': function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_REPROMPT");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.PauseIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'Unhandled': function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_REPROMPT");
        this.emit(':ask', speechOutput, reprompt);
    }
};
