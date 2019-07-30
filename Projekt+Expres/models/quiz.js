// schemat 1 newsa
var mongoose = require("mongoose");
var Schema = mongoose.Schema


var quizSchema = new Schema({
  title: { type: String, required: true },
  vote: { type: Number, required: true, default: 0 },
});

// ten News pod spodem bd w bazie danych atlas mongo db
module.exports = mongoose.model('Quiz', quizSchema)
