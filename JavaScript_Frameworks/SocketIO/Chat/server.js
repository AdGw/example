let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io').listen(server);

let users=[];
let connections =[];

server.listen(process.env.PORT || 3000);
console.log('Server running');

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket){
  connections.push(socket);
  console.log("Connected: %s", connections.length);

  //Disconnect
  socket.on('Disconnect', function(data){
    connections.splice(connections.indexOf(socket),1);
    console.log('Diconnected: %s', connections.length)
  })
  //Send Message
  socket.on('send message', function(data){
    console.log(data);
    io.sockets.emit('new message', {msg: data})
  })
})
