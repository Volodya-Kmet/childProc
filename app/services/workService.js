const spawn = require('child_process').spawn;
let response;
let child;

let serverError = {error: 'Internal server error'};

module.exports = {
    npmInstall(req, callback) {
        if (req.body.name) {
            child = spawn('npm.cmd', ['install', '--save', ('' + req.body.name)]);

            child.on('close', function () {
                global[req.body.name] = require(req.body.name)
                callback(null, 'done')
            });
            child.on('error', (err) => {
                console.log(err);
                callback(serverError)
            });
        }
    },

    runCode(req, callback) {
        try {
            eval(req.body.code);
            callback(null, eval(req.body.code))
        } catch (e) {
            if (e instanceof SyntaxError || ReferenceError) {
                callback(e.message)
            }
        }
    }
};