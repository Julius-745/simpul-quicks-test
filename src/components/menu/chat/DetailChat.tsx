import { ArrowIcon, CloseIcon } from "@/components/icons";
import { MobileScreen, RandomColor } from "@/lib";
import { Chat, MessageInterface } from "@/type";
import {
  Stack,
  Text,
  Button,
  HStack,
  Divider,
  AbsoluteCenter,
  Box,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

interface DetailChatProps {
  chat: Chat;
  onBack: () => void;
  /* eslint-disable no-unused-vars */
  setActiveMenu: (id: number) => void;
}

const DetailChat = ({ chat, onBack, setActiveMenu }: DetailChatProps) => {
  const [chats, setChats] = useState(chat.chat);
  const [input, setInput] = useState<string>("");
  const mobileScreen = MobileScreen();
  let lastDate: string | null = null;

  const handleAddChat = (messages: string) => {
    const newMessage = {
      date: new Date(),
      messages: [
        {
          name: "You",
          message: messages,
        },
      ],
    };
    setChats(prevState => [...prevState, newMessage]);
  };

  const handleCloseMenu = () => {
    setActiveMenu(-1);
  };

  return (
    <Stack color={"black"}>
      <HStack
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        px={mobileScreen ? 2 : 6}
        py={3}
      >
        <HStack>
          <Button
            _hover={{ cursor: "pointer" }}
            variant={"unstyled"}
            onClick={() => onBack()}
          >
            <ArrowIcon width="25" height="25" color="gray" />
          </Button>
          <Stack>
            <Text color={"blur"} fontSize={"xl"} fontWeight={"bold"}>
              {chat.title}
            </Text>
            <Text color={"black"}>{chat.participant} Participants</Text>
          </Stack>
        </HStack>
        <Button variant={"unstyled"} onClick={() => handleCloseMenu()}>
          <CloseIcon width="15" height="15" color="gray" />
        </Button>
      </HStack>
      <Divider borderColor="gray" borderWidth="1px" variant="solid" />
      {chats.length === 0 && (
        <Stack bgColor={"blue.200"} p={5} mx={2} borderRadius={5}>
          <Text color={"black"}>{chat.description}</Text>
        </Stack>
      )}
      <Stack maxHeight={mobileScreen ? "41vh" : "50vh"} overflowY={"scroll"}>
        {chats.map((item: MessageInterface, idx: number) => {
          const currentDate = item.date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          const showDateDivider = currentDate !== lastDate;
          lastDate = currentDate;

          return (
            <Stack key={idx} spacing={3} mt={4} color={"black"}>
              {showDateDivider && (
                <Box position="relative">
                  <Divider
                    borderColor="gray"
                    borderWidth="1px"
                    variant="solid"
                  />
                  <AbsoluteCenter bg="white" px="4">
                    {currentDate}
                  </AbsoluteCenter>
                </Box>
              )}
              <Box px={5}>
                {item.messages.map((messages, idx) => {
                  const { darkerColor } = RandomColor(messages.name);
                  return (
                    <Stack
                      mb={2}
                      key={idx}
                      textAlign={messages.name === "You" ? "right" : "left"}
                    >
                      <Text fontWeight={"bold"} color={darkerColor}>
                        {messages.name}
                      </Text>
                    </Stack>
                  );
                })}
                {item.messages.map((message, idx) => {
                  const { color } = RandomColor(message.name);
                  return (
                    <Stack
                      bgColor={color}
                      p={2}
                      borderRadius={5}
                      width={"70%"}
                      float={message.name === "You" ? "right" : "left"}
                      key={idx}
                    >
                      <Text color={"black"}>{message.message}</Text>
                      <Box color={"black"}>
                        {item.date.toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </Box>
                    </Stack>
                  );
                })}
              </Box>
            </Stack>
          );
        })}
      </Stack>
      <HStack pos={"absolute"} w={"100%"} bottom={2} px={2}>
        <Input
          color="black"
          variant="outline"
          borderColor="black"
          onChange={e => setInput(e.target.value)}
          _placeholder={{ color: "black" }}
          placeholder="Type a new message"
        />
        <Button
          _hover={{ color: "black" }}
          bgColor="#2F80ED"
          color="white"
          size={mobileScreen ? "sm" : "md"}
          onClick={() => handleAddChat(input)}
        >
          Send
        </Button>
      </HStack>
    </Stack>
  );
};

export default DetailChat;
