var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TimerSchema = new Schema({
    name: String,
    roundNo: Number,
    startDate: String,
    startTime: String,
    duration: Number,
    isActive: Boolean
});

module.exports = mongoose.model('Timer', TimerSchema);
