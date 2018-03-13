const config = require('./app/config'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    cors = require('cors'),
    runCode = require('./app/routes/runCode');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));


// REGISTER ROUTES
// =======================================================
app.use('/runCode', runCode);

// START THE SERVER
// =======================================================
app.listen(config.server.port);

console.log(`server run ${config.server.host}: ${config.server.port}`);

