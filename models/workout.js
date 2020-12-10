let mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddSchema = new Schema({
   day: {
        type: Number,
        default: new Date(),
      },
    exercises: Array,
});

const Workout = mongoose.model("Workout", AddSchema);

module.exports = Workout;