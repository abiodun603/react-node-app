const http = require('http');
const app = require("./app")

// listen to server port else listen to port 3000
const port = process.env.PORT || 3000;

// Function which is executed when we get a new request
const server = http.createServer(app);
server.listen(port);
