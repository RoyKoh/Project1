// require/import the HTTP module
var http = require('http');
// var path = require('path');
var fs = require('fs');
// var index = fs.readFileSync('index.html');

// define a port we want to listen to
// const PORT=8080;

// function which handles requests and send response
// function handleRequest(request, response){
//    response.end('It Works!! Path Hit: ' + request.url);
// }

// Create a server
// var server = http.createServer(handleRequest);

// start our server
// server.listen(PORT, function(){
    //Callback triggered when server is successfully listening.
//    console.log("Server listening on: http://localhost:%s", PORT);
// });

fs.readFile('index.html', function (err, html) {
   if (err) {
       throw err;
   }
   http.createServer(function(request, response) {
       response.writeHeader(200, {"Content-Type": "text/html"});
       response.write(html);
       response.end();
   }).listen(1337, '127.0.0.1');
});
