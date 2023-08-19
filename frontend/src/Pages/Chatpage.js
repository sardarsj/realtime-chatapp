import React, { useEffect, useState } from "react";
import axios from "axios";
// axios is used to fetch data from backend

const Chatpage = () => {
  // chats is basically use to store the data and setChats to modify it...useState v ek hook h
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      {/* we are basically mapping through chat and displaying the name on the screen and in mapping everyone should have a unique key so thatswhy we used "key" */}
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default Chatpage;
