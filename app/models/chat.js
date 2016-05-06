// app/models/chat.js
// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChatSchema = new Schema({
    from: {type: String, default: 'username'},
    text: {type: String, default: ''}
});

// define our chat model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Chatlog', ChatSchema);


