'use strict';

var http = require('http'),
    url = require('url'),
    staticFile = require('node-static'),
    file = new staticFile.Server('../Client', {cache: 0}),
    requestHandlers = require('./requestHandlers');

function start () {
    function onRequest (request, response) {
        var pathname = url.parse(request.url).pathname,
            path = pathname.split('/')[1],
            id = pathname.split('/')[2];

        console.log('METHOD: ' + request.method + ' PATHNAME:' + pathname);

        if (request.method === 'GET') {
            if (pathname === '/getStudentList') {
                response.writeHead(200, {"Content-Type": "application/json"});
                response.write(requestHandlers.getStudentList());
                response.end();
            }

            if (pathname === '/getCountryList') {
                response.writeHead(200, {"Content-Type": "application/json"});
                response.write(requestHandlers.getCountryList());
                response.end();
            }
        } else if (request.method === 'DELETE') {
            if (path === 'getCountryList') {
                requestHandlers.deleteCountry(id);
                response.writeHead(200, {"Content-Type": "application/json"});
                response.end();
            }
        } else if (request.method === 'PUT') {
            if (path === 'getStudentList') {
                var postData = '';

                request.addListener("data", function(postDataChunk) {
                    postData += postDataChunk;
                });

                request.addListener("end", function() {
                    requestHandlers.changeStudent(id, postData);
                });

                response.end();
            }
        }

        file.serve(request, response);
    }

    http.createServer(onRequest).listen(3000);
    console.log('Server running on port 3000');
}

exports.start = start;