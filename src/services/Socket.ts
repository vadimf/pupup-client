import io from 'socket.io-client';
import Config from 'react-native-config';

const socket = io(Config.API_URL);

socket.on('connect', function () {
    console.log("connected")
});
socket.emit('events', {name: 'Nest'}, (data: any) => console.log(data));
