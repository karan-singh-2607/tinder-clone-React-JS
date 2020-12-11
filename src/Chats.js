import React from 'react';
import Chat from './Chat';
import './Chats.css';

const Chats = () => {
    return (
        <div className="Chat__Inbox">
            <Chat
                name="mark"
                message="hello there!"
                timestamp="40 sec ago"
                profilePic="https://source.unsplash.com/random/200x200" />

            <Chat
                name="samantha"
                message="hello there!"
                timestamp="40 sec ago"
                profilePic="" />

            <Chat
                name="Ellen"
                message="hello there!"
                timestamp="40 sec ago"
                profilePic="https://source.unsplash.com/random/200x200" />

            <Chat
                name="Zuss"
                message="hello there!"
                timestamp="40 sec ago"
                profilePic="https://source.unsplash.com/random/200x200" />

            <Chat
                name="Rohit"
                message="hello there!"
                timestamp="40 sec ago"
                profilePic="https://source.unsplash.com/random/200x200" />
        </div>
    )
}

export default Chats
