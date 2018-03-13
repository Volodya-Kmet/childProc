const express = require('express'),
    router = express.Router();
    WorkService = require('../services/workService');

module.exports = router;

router.post('/npmInstall', (req, res) => {
    WorkService.npmInstall(req, (err, done) => {
        sendResponse(res, err, done);
    });


});
router.post('/runCode', (req, res) => {
    WorkService.runCode(req, (err, done) => {
        sendResponse(res, err, done);
    })
});

function sendResponse(res, err, responseObject) {
    if (err) {
        res.send({response: err});
    } else {
        res.status(200).send({response: responseObject});
    }
}
