import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { getMessages } from '../api';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatWindow = ({ chatId }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            const data = await getMessages(chatId);
            setMessages(data);
        };
        if (chatId) {
            fetchMessages();
        }
    }, [chatId]);

    return (
        <Container>
            <Typography variant="h6">Chat Window</Typography>
            <Box>
                <MessageList messages={messages} />
                <MessageInput chatId={chatId} />
            </Box>
        </Container>
    );
};

export default ChatWindow;
