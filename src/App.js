import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';

const App = () => {
    const [selectedChat, setSelectedChat] = useState(null);

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <ChatList onSelectChat={setSelectedChat} />
                </Grid>
                <Grid item xs={8}>
                    {selectedChat && <ChatWindow chatId={selectedChat} />}
                </Grid>
            </Grid> 
        </Container>
    );
};

export default App;
