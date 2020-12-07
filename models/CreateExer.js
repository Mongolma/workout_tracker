const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CreateExer = new Schema({
  name: {
    type: String,
    unique: true
  },
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Not"
    }
  ]
});

const Create = mongoose.model("Create", CreateExer);

module.exports = Create;