let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io').listen(server);

users=[];
connections =[];

server.listen(process.env.PORT || 3000);
console.log('x')
app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
});
