// schemat 1 newsa
var mongoose = require("mongoose");
var Schema = mongoose.Schema


var newsSchema = new Schema({
    description: { type: String, required: [true, 'Pole description jest wymagane'] },
    title: { type: String, required: [true,'Pole tytuł jest wymagane'] },
    created: {type: Date, default: Date.now}
});

// ten News pod spodem bd w bazie danych atlas mongo db
module.exports = mongoose.model('News' , newsSchema)
console.log(newsSchema)