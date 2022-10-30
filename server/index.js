


const WebSocket = require('ws')
const server = new WebSocket.Server({ port: '8080' })

let count = 0;
server.on('connection', socket => {

    socket.on('message', message => {

        count = count + 1
        if (count % 10 == 0) {
            message = 'Winner is ' + message
        }
        server.clients.forEach(client => {
            client.send(JSON.stringify({ count: count, 'message': message }))
        })
    });

});



