import React, { useState, useEffect } from 'react'
import QueryString from 'qs';
import { io } from 'socket.io-client'
let socket;

function Chat({ location }) {
    const [name , setName] = useState('');
    const [room , setRoom] = useState('');
    const ENDPOINT = 'localhost:5000'


    useEffect(() => {
        const { name, room} = QueryString.parse(location)

        socket = io(ENDPOINT)

        setName(name)
        setRoom(room)

        console.log(socket);
    }, [ENDPOINT , location])
    return ( 
        <h1>Chat</h1>
     );
}

export default Chat;
