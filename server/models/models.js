var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/beltexam1');

// const QuoteSchema = new mongoose.Schema({
//     content: { type: String, required: true, minlength: 3, maxlength: 255 },
//     votes: { type: Number, default: 0 }
// }, { timestamps: true })
// mongoose.model('Quote', QuoteSchema);

const PetSchema = new mongoose.Schema({
    name: { type: String, minlength: [3, "Name must be at least 3 characters."], },
    type: { type: String, minlength: [3, "Type must be at least 3 characters."] },
    description: { type: String, minlength: [3, "Description must be at least 3 characters."] },
    skills: { type: [String] },
    likes: { type: Number, default: 0 }
}, { timestamps: true })
mongoose.model('Pet', PetSchema);

// Schemas = {
//     Pet: mongoose.model('Pet'),
//     Quote: mongoose.model('Quote')
// }

module.exports = mongoose.model('Pet');