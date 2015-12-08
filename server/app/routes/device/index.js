/**
 * Created by Austin on 12/7/15.
 */
var router = require('express').Router();
var serialport = require("serialport").SerialPort;
var _ = require('lodash');

module.exports = router;


//get all devices
router.get('/', (req, res) => {
    serialPort.list()
    .then(ports => {
        res.json(_.map(ports, (port) => {Name: port.comName}))
    })
    .then(null, next)
});
