module.exports=(app)=>{
    var port = 8000;
    var http = require('http').Server(app);
    var io = require('socket.io')(http);

    http.listen(port, function() {

        console.log('Listening on port ' + port);
    });

    io.on('connection', function(socket){


        console.log('User connected .');


        socket.on('chat', function(data){

            console.log('Info : name: '+ data.name + ', message: ' + data.message);

            io.sockets.emit('chat', data);
        });

    });
};


