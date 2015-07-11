var mongoose = require('mongoose');
var Timer = require('../../models/timer');

module.exports.addTimer = function(req, res) {
    var timer = new Timer(req.body.timer);

    timer.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json({timer: timer});
    })
};

module.exports.getAllTimers = function(req, res) {
    Timer.find(function(err, timers) {
        if (err) {
            res.send(err);
        }
        res.json({timers: timers});
    });};

module.exports.getSingleTimer = function(req, res, id) {
    Timer.findById(id, function(err, timer) {
        if(err) {
            res.send(err);
        }
        res.json({timer: timer});
    })
};

module.exports.updateTimer = function(req, res, id) {
    Timer.findByIdAndUpdate(id, {$set: req.body.timer}, function (err, timer) {
        if(err){
            res.send(err);
        }
        res.json({timer:timer});
    });
};

module.exports.deleteTimer = function(req, res, id) {
    Timer.findByIdAndRemove(id, function(err){
        if (err) {
            res.send(err);
        }
        res.sendStatus(200);
    });
};
