import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { getChats } from "../api";

const ChatList = ({ onSelectChat }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await getChats(1);
        const data = response.data.data; // Adjust based on actual API response structure
        console.log("Chats fetched:", response.data); // Log the data received from API
        setChats(data);
      } catch (error) {
        console.error("Error fetching chats", error);
        // Optionally, set an empty array or handle error state here
        setChats([]);
      }
    };
    fetchChats();
  }, []);

  return (
    <List>
      {Array.isArray(chats) &&
        chats.map((chat) => (
          <ListItem button key={chat.id} onClick={() => onSelectChat(chat.id)}>
            <ListItemText primary={chat.id} />
          </ListItem>
        ))}
    </List>
  );
};

export default ChatList;
