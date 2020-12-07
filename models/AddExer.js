const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddSchema = new Schema({
    name: {
        type: String,
        unique: true
      },
      stats: [
        {
          type: Schema.Types.ObjectId,
          ref: "Stats"
        }
      ]
});

const Add = mongoose.model("Add", AddSchema);

module.exports = Add;