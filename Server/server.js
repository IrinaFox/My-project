'use strict';

var http = require('http'),
    url = require('url'),
    staticFile = require('node-static'),
    file = new staticFile.Server('../Client', {cache: 0}),
    requestHandlers = require('./requestHandlers');

function start () {
    function onRequest (request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('URL ' + pathname);

        if (pathname === '/getStudentList') {
            console.log('!!!');
            response.writeHead(200, {"Content-Type": "application/json"});
            response.write(requestHandlers.getStudentList());
            response.end();
        }

        file.serve(request, response);
    }

    http.createServer(onRequest).listen(8025);
    console.log('Server running on port 8003');
}

exports.start = start;
