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
    } else {
        console.log('Read file ' + req.url);

        if (req.url === '/') {
            res.writeHead(200);
            res.write(fs.readFileSync('index.html'));
            res.end();

            return;
        }

        fs.readFile(__dirname + req.url, function (err, data) {
            if (err) {
                res.writeHead(404);
                res.write('404 File not found!\n');
                res.end('Error code: ' + JSON.stringify(err));
                
                console.log('File not found ' + req.url);
                return;
            }

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
