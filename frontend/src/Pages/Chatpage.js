import React, { useEffect } from "react";
import axios from "axios";
// axios is used to fetch data from backend

const Chatpage = () => {

    const fetchChats = async () => {
        const data = await axios.get("/api/chat");
        console.log(data);

    };

    useEffect(() => {
        fetchChats();
    }, []);
  return <div>Chats Page</div>;
};

export default Chatpage;
