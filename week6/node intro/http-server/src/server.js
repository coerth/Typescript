"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var http = require("http");
dotenv.config({ path: '../config.env' });
console.log(process.env.PORT);
console.log(process.env.HOSTNAME);
var server = http.createServer(function (req, res) {
    //set response header
    var pathName = req.url;
    console.log(pathName);
    if (pathName === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Hello World");
    }
    else if (pathName === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About</h1>");
    }
    else {
        res.writeHead(400, { "Content-Type": "text/html" });
        res.end("Path ".concat(pathName, " does not exist"));
    }
});
server.listen({
    host: process.env.HOSTNAME,
    port: process.env.PORT,
    exclusive: true
}, function () {
    console.log("Server is listening to http://localhost:".concat(process.env.PORT));
});
