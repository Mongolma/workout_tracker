const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StatsOfExer = new Schema({

});

const Stats = mongoose.model("Stats", StatsOfExer);

module.exports = Stats;