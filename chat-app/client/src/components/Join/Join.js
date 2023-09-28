import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Join.css';


function Join() {
    const [name , setName] = useState('');
    const [room , setRoom] = useState('');
    return ( 
        <div className='joinOuterContainer'>
            <div className='joinInnerConatainer'>
                <h1 className='heading'>Join a Room</h1><br/>
                <div><input type="text" placeholder="NAME" className='joinInput' onChange={(event) => setName( event.target.value )} /></div>
                <div><input type="text" placeholder="ROOM"  className='joinInput mt-20' onChange={(event) => setRoom( event.target.value )} /></div>
                <Link  onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?${name}&room${room}`}>
                    <button className='button' type='submit'>Sign In</button>
                </Link>
            </div>
        </div>
     );
}

export default Join;