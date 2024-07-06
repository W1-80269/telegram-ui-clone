import axios from 'axios';

// const API_URL = 'https://devapi.beyondchats.com/api';

export const getChats = async (page) => {
    try {
        const response = await axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=1');
        return response.data;
    } catch (error) {
        console.error("Error fetching chats", error);
        throw error;
    }
};

export const getMessages = async (chatId) => {
    try {
        const response = await axios.get('https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888');
        return response.data;
    } catch (error) {
        console.error("Error fetching messages", error);
        throw error;
    }
};
