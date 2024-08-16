import { MobileScreen } from "@/lib";
import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import DetailChat from "./DetailChat";
import ChatList from "./ChatList";
import { Chat } from "@/type";

const ChatWrapper = ({
  chats,
  setActiveMenu,
}: {
  chats: Chat[];
  /* eslint-disable no-unused-vars */
  setActiveMenu: (id: number) => void;
}) => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const mobileScreen = MobileScreen();

  const handleSelectedChat = (id: number) => {
    setSelectedChat(id);
  };

  const handleBackToList = () => {
    setSelectedChat(null);
  };

  return (
    <Box
      position="absolute"
      bottom={"7vh"}
      right={"5%"}
      width={mobileScreen ? "80vw" : "80vh"}
      height={mobileScreen ? "60vh" : "70vh"}
      bg="white"
      boxShadow="lg"
      borderRadius="md"
      zIndex={10}
    >
      {selectedChat !== null ? (
        <DetailChat
          setActiveMenu={setActiveMenu}
          chat={chats[selectedChat]}
          onBack={handleBackToList}
        />
      ) : (
        <ChatList chats={chats} onSelectedChat={handleSelectedChat} />
      )}
    </Box>
  );
};

export default ChatWrapper;
