// call packages
var express = require("express");
var bodyParser = require("body-parser");
var converter = require("./converter");
var server = express();

// configure server
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('{message: "Something goes wrong"}');
});

var port = process.env.PORT || 8080;
var host = "0.0.0.0";

var router = express.Router();
router.all('/', function(req, res) {
    res.json({ message: 'Celsius to fahrenheit converter' });
});

router.route('/celsius/:degree')
    .all(function(req, res) {
        res.json({ fahrenheit: converter.toFahrenheit(req.params.degree) });
    });

router.route('/fahrenheit/:degree')
    .all(function(req, res) {
        res.json({ celsius: converter.toCelsius(req.params.degree) });
    });

router.route('*')
    .all(function(req, res) {
        res.sendStatus(404);
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /converter
server.use('/converter', router);

server.listen(port,host);
console.log('Server is running on ' + port);
