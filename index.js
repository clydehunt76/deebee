'use strict';

// Required by Alexa
var Alexa = require('alexa-sdk');
var APP_ID = 'amzn1.ask.skill.292c95e5-0cb7-49c3-995d-82a35be38e3f';
              
// Define the langauge strings to be used
var languageStrings = {
    "en": {
        "translation": {
            "SKILL_NAME" : "DannyBoyJazzAndBlues",
            "FESTIVAL_DATES_MESSAGE" : "This years festival will run between ",
            "HELP_MESSAGE" : "Hi, I am DeeBee, your Danny Boy Jazz and Blues Alexa assistant. I can tell you when this years festival is on. What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Hope to see you at this years festival, Goodbye!"
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

// Define the handler and include the intents you want to work with
var handlers = {
    'festivalDatesIntent': function () {
        this.emit('getFestivalDates');
    },
    'getFestivalDates': function () {
      var outputMessage = this.t("FESTIVAL_DATES_MESSAGE") + process.env.thisYearsFestivalDates
      this.emit(':tellWithCard', outputMessage, this.t("SKILL_NAME"), outputMessage)
    },
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
