const config = require('./app/config'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    instalLib = require('./app/routes/instalLib'),
    path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));


// REGISTER ROUTES
// =======================================================
app.use('/instalLib', instalLib);

logger.info('===============Environment=================');
logger.info(' current env : ' + env);

// START THE SERVER
// =======================================================
app.listen(config.server.port);

logger.info('================Server=====================');
logger.info(' host : ' + config.server.host);
logger.info(' port : ' + config.server.port);

