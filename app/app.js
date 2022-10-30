

const socket = new WebSocket('ws://localhost:8080');

// Listen for messages
socket.onmessage = ({ data }) => {
    
    console.log('Message from server ', data);
    data = JSON.parse(data)
    document.querySelector('#count').innerHTML = data.count
    document.querySelector('#lastPressed').innerHTML = data.message

};

document.querySelector('button').onclick = () => {
    socket.send(document.querySelector('#document').innerHTML);
}