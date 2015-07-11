var express = require('express');
var router = express.Router();

var timer = require('./api/timer');

router.route('/timers')
    .post(function(req,res) { timer.addTimer(req,res) })
    .get(function(req,res) {timer.getAllTimers(req,res)});

router.route('/timers/:timer_id')
    .get(function(req, res) { timer.getSingleTimer(req, res, req.params.timer_id) })
    .put(function(req, res) { timer.updateTimer(req, res, req.params.timer_id) })
    .delete(function(req, res) { timer.deleteTimer(req, res, req.params.timer_id) });

module.exports = router;
