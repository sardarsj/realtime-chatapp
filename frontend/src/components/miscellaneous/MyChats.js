import React, { useEffect, useState } from "react";
import { Box, useToast } from "@chakra-ui/react";
import { ChatState } from "../../Context/ChatProvider";
import axios from "axios";

const MyChats = () => {
  const [loggedUser, setLoggedUser] = useState();
  const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();

  const toast = useToast();

  const fetchChats = async () => {
    try {
      const config = {
        header: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const {data} = await axios.get("/api/chat", config);
      if(!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);

      setSelectedChat(data);
      setLoadingChat(false);
      onClose();

    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, [])  
  return (
    <Box
      d={{base: selectedChat ? "none": "flex", md: "flex"}}
      flexDir="column"
      alignItems="center"
      p={3}
      bg = "white"
      w = {{base: "100%", md: "31%"}}
      borderRadius="1g"
      borderWidth= " 1px"
    >
      <Box
        pb={3}
        px={3}
        fontSize={{base: "28px", md: "30px"}}
        fontFamily="Work sans"
        d = "flex"
        w = "100%"
        justifyContent="space-between"
        alignItems="center"      
      >
        My Chats

        
      </Box>
    </Box>
  )
};

export default MyChats;
