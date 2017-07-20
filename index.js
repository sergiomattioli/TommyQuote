var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function() { //Executes when a new session is launched
        this.emit('LaunchIntent');
    },

    'TommyIntent': function() {
        this.emit('TommyQuote');
    },

    'TommyQuote': function() {
      this.emit(':tell', 'Tommy says... <audio src="https://raw.githubusercontent.com/sergiomattioli/TommyQuote/master/'+randomSound()+'.mp3"/>');
    //    this.emit(':tell', 'Tommy says... <audio src="https://private.wargo.net/baby-crying.mp3"/>');

    }
};


//Returns a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Returns a random sound file name
function randomSound() {
    var fileNames = ['audio1', 'audio2', 'audio3', 'audio4'];
    return(fileNames[getRandomInt(0, fileNames.length - 1)]);
}
