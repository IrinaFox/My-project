'use strict';

var http = require('http'),
    url = require('url'),
    staticFile = require('node-static'),
    file = new staticFile.Server('../Client'),
    requestHandlers = require('./requestHandlers');

function start () {
    function onRequest (request, response) {
        var pathname = url.parse(request.url).pathname;

        if (pathname === '/getStudentList') {
            response.writeHead(200, {"Content-Type": "application/json"});
            response.write(requestHandlers.getStudentList());
            response.end();
        }

        file.serve(request, response);
    }

    http.createServer(onRequest).listen(3005);
    console.log('Server running on port 3005');
}

exports.start = start;