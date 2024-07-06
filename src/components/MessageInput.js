import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const MessageInput = ({ chatId }) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        // Logic to send message
        console.log(`Sending message to chat ${chatId}: ${message}`);
        setMessage('');
    };

    return (
        <Box display="flex" alignItems="center">
            <TextField 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                label="Type a message" 
                variant="outlined" 
                fullWidth 
            />
            <Button onClick={handleSend} variant="contained" color="primary">Send</Button>
        </Box>
    );
};

export default MessageInput;
