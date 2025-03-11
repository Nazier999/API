const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    playerid: String,
    screenName: String,
    firstName: String,
    lastName: String,
    dateStartedPlaying: Date,
    score: Number
});

module.exports = mongoose.model("Player", playerSchema);
