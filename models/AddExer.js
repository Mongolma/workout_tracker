let mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddSchema = new Schema({
   day: {
        type: Number,
        default: new Date(),
      },
    exercises: Array,
});

const Add = mongoose.model("Add", AddSchema);

module.exports = Add;