import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const MessageList = ({ messages }) => {
    return (
        <List>
            {messages.map((message) => (
                <ListItem key={message.id}>
                    <ListItemText primary={message.text} secondary={message.sender} />
                </ListItem>
            ))}
        </List>
    );
};

export default MessageList;
