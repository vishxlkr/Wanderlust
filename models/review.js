const { string, number, ref } = require("joi");
const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
   comment: {
      type: String,
      required: true, // optional, but usually reviews must have text
   },
   rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
   author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
   },
});

module.exports = mongoose.model("Review", ReviewSchema);
