var http = require("http");
var fs = require("fs");
var url = require("url");

var greetings;
fs.readFile("greetings.txt", function(err, body) {
    if (err === null) {
        greetings = body.toString().split("\n");
        if (greetings.slice(-1) == "") {
            greetings.pop();
        }
        var server = http.createServer(function(req, res) {
            res.writeHead(200);
            var query = url.parse(req.url, true).query;
            console.log(query);
            var name = query.name;
            var greeting = greetings[Math.floor(Math.random() * greetings.length)];
            if (name) {
                res.end(greeting + ", " + name);
            } else {
                res.end(greeting);
            }
        });
        server.listen(8080);
    } else {
        console.log(err);
    }
});