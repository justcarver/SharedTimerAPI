var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TimerSchema = new Schema({
    name: String,
    roundNo: Number,
    duration: Number,
    startTime: Date
});

module.exports = mongoose.model('Timer', TimerSchema);
