/* Database stuff
// Require AWS
var AWS = require("aws-sdk");

// Configure AWS
AWS.config.update({
    region: "us-east-2",
    endpoint: "http://localhost:8000"
});

// Make new document client
var docClient = new AWS.DynamoDB.DocumentClient();

// Table is called results
var table = "Results";
*/

var url = require('url');

var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    path = require('path'),
    html = fs.readFileSync('index.html');

var log = function (entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

var server = http.createServer(function (req, res) {
    // Handle POST requests
    if (req.method === 'POST') {
        var body = '';

        req.on('data', function (chunk) {
            body += chunk;
        });

        req.on('end', function () {
            if (req.url === '/') {
                log('Received message: ' + body);
            } else if (req.url = '/scheduled') {
                log('Received task ' + req.headers['x-aws-sqsd-taskname'] + ' scheduled at ' + req.headers['x-aws-sqsd-scheduled-at']);
            }

            res.writeHead(200, 'OK', { 'Content-Type': 'text/plain' });
            res.end();
        });
    // Default handler
    } else {
        // Log the file that's being access
        console.log('Read file ' + req.url);

        // If we're just accessing the website, send index.html
        if (req.url === '/') {
            res.writeHead(200);
            res.write(fs.readFileSync('index.html'));
            res.end();

            return;
        }

        // Read the file specified by the URL otherwise
        fs.readFile(__dirname + req.url, function (err, data) {
            // If there was an error reading the file, reply with 404
            if (err) {
                res.writeHead(404);
                res.write('404 File not found!\n');
                res.end('Error code: ' + JSON.stringify(err));
                
                console.log('File not found ' + req.url);
                return;
            }

            // If we read the file successfully, send it
            res.writeHead(200);
            res.write(data);
            res.end();
        });
    }
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
