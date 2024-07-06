import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { getMessages } from '../api'; // Import the correct function

const MessageList = ({ chatId }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await getMessages(chatId); // Use getMessages instead of getChatMessages
                const data = response.messages; // Adjust based on actual API response structure
                console.log("Messages fetched:", data); // Log the data received from API
                setMessages(data);
            } catch (error) {
                console.error("Error fetching messages", error);
                setMessages([]);
            }
        };

        if (chatId) {
            fetchMessages();
        }
    }, [chatId]);

    return (
        <List>
            {Array.isArray(messages) ? (
                messages.map((message) => (
                    <ListItem key={message.id}>
                        <ListItemText primary={message.text} />
                    </ListItem>
                ))
            ) : (
                <ListItem>
                    <ListItemText primary="No messages found" />
                </ListItem>
            )}
        </List>
    );
};

export default MessageList;
