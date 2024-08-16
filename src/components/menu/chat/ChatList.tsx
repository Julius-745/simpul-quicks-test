import { MobileScreen } from "@/lib";
import {
  Box,
  Divider,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SeachIcon, UserIcon } from "../../icons";
import { Chat } from "@/type";
import { useEffect, useState } from "react";

interface ChatListProps {
  chats: Chat[];
  // eslint-disable-next-line no-unused-vars
  onSelectedChat: (chatId: number) => void;
}

const ChatList = ({ chats, onSelectedChat }: ChatListProps) => {
  const mobileScreen = MobileScreen();
  const [searchText, setSearchText] = useState<string>("");
  const [filteredChats, setFilteredChats] = useState<Chat[]>([]);
  const getInitial = (title: string) => {
    let initial = title.substring(0, 1);
    return initial;
  };

  useEffect(() => {
    const filtered = chats.filter(chat =>
      chat.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredChats(filtered);
  }, [chats, searchText]);

  return (
    <>
      <Stack p={mobileScreen ? 2 : 4} spacing={mobileScreen ? 3 : 4}>
        <InputGroup>
          <Input
            color="black"
            variant="outline"
            borderColor="black"
            onChange={e => setSearchText(e.target.value)}
            width="100%"
            _hover={{ borderColor: "black" }}
            _placeholder={{ pl: 5, color: "black" }}
            placeholder="Search"
          />
          <InputRightElement pointerEvents="none" mr={5}>
            <SeachIcon width="18" height="17" color="black" />
          </InputRightElement>
        </InputGroup>
      </Stack>
      <Box height={mobileScreen ? "50vh" : "60vh"} overflowY="auto" mx={2}>
        <Stack mt={5} gap={4} mx={2}>
          {filteredChats
            ? filteredChats.map((item, idx) => (
                <Box key={idx} mb={5}>
                  <Flex
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <HStack
                      gap={mobileScreen ? 10 : 14}
                      alignItems="center"
                      _hover={{ cursor: "pointer" }}
                      onClick={() => onSelectedChat(idx)}
                    >
                      <Box pos="relative" ml={2} mb={mobileScreen ? 8 : 9}>
                        {item.type === "announce" ? (
                          <>
                            <Box
                              backgroundColor="#4F4F4F"
                              borderRadius="50%"
                              width={mobileScreen ? "28px" : "34px"}
                              height={mobileScreen ? "28px" : "34px"}
                              bgColor="#2F80ED"
                              pos="absolute"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              zIndex={0}
                            >
                              <Text fontWeight={"bold"}>
                                {getInitial(item.title)}
                              </Text>
                            </Box>
                          </>
                        ) : (
                          <>
                            <Box
                              backgroundColor="#4F4F4F"
                              borderRadius="50%"
                              width={mobileScreen ? "28px" : "34px"}
                              height={mobileScreen ? "28px" : "34px"}
                              bgColor="#E0E0E0"
                              pos="absolute"
                              transform="translateX(-10px)"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              zIndex={0}
                            >
                              <UserIcon
                                width={mobileScreen ? "24" : "30"}
                                height={mobileScreen ? "24" : "30"}
                                color="gray"
                              />
                            </Box>
                            <Box
                              borderRadius="50%"
                              width={mobileScreen ? "28px" : "34px"}
                              height={mobileScreen ? "28px" : "34px"}
                              pos="absolute"
                              bgColor="#2F80ED"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              zIndex={1}
                            >
                              <UserIcon
                                width={mobileScreen ? "24" : "30"}
                                height={mobileScreen ? "24" : "30"}
                                color="white"
                              />
                            </Box>
                          </>
                        )}
                      </Box>
                      <Box>
                        <HStack alignItems="center">
                          <Text
                            fontSize={mobileScreen ? "sm" : "md"}
                            color="blue"
                          >
                            {item.title}
                          </Text>
                          <Text
                            fontSize={mobileScreen ? "xs" : "sm"}
                            color="black"
                          >
                            {item.date.toLocaleString("en-US", {
                              timeZone: "Asia/Jakarta",
                            })}
                          </Text>
                        </HStack>
                        <Text
                          fontSize={mobileScreen ? "sm" : "md"}
                          fontWeight="bold"
                          color="black"
                        >
                          {item.sender}
                        </Text>
                        <Text
                          fontSize={mobileScreen ? "xs" : "sm"}
                          color="black"
                        >
                          {item.description}
                        </Text>
                      </Box>
                    </HStack>
                    <Box>
                      <Text
                        fontSize={mobileScreen ? "2rem" : "3rem"}
                        color="red"
                      >
                        {item.unread ? "." : ""}
                      </Text>
                    </Box>
                  </Flex>
                  <Divider
                    mt={5}
                    borderColor="gray"
                    borderWidth="1px"
                    variant="solid"
                  />
                </Box>
              ))
            : chats.map((item, idx) => (
                <Box key={idx} mb={5}>
                  <Flex
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <HStack
                      gap={mobileScreen ? 10 : 14}
                      alignItems="center"
                      _hover={{ cursor: "pointer" }}
                      onClick={() => onSelectedChat(idx)}
                    >
                      <Box pos="relative" ml={2} mb={mobileScreen ? 8 : 9}>
                        {item.type === "announce" ? (
                          <>
                            <Box
                              backgroundColor="#4F4F4F"
                              borderRadius="50%"
                              width={mobileScreen ? "28px" : "34px"}
                              height={mobileScreen ? "28px" : "34px"}
                              bgColor="#2F80ED"
                              pos="absolute"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              zIndex={0}
                            >
                              <Text fontWeight={"bold"}>
                                {getInitial(item.title)}
                              </Text>
                            </Box>
                          </>
                        ) : (
                          <>
                            <Box
                              backgroundColor="#4F4F4F"
                              borderRadius="50%"
                              width={mobileScreen ? "28px" : "34px"}
                              height={mobileScreen ? "28px" : "34px"}
                              bgColor="#E0E0E0"
                              pos="absolute"
                              transform="translateX(-10px)"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              zIndex={0}
                            >
                              <UserIcon
                                width={mobileScreen ? "24" : "30"}
                                height={mobileScreen ? "24" : "30"}
                                color="gray"
                              />
                            </Box>
                            <Box
                              borderRadius="50%"
                              width={mobileScreen ? "28px" : "34px"}
                              height={mobileScreen ? "28px" : "34px"}
                              pos="absolute"
                              bgColor="#2F80ED"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              zIndex={1}
                            >
                              <UserIcon
                                width={mobileScreen ? "24" : "30"}
                                height={mobileScreen ? "24" : "30"}
                                color="white"
                              />
                            </Box>
                          </>
                        )}
                      </Box>
                      <Box>
                        <HStack alignItems="center">
                          <Text
                            fontSize={mobileScreen ? "sm" : "md"}
                            color="blue"
                          >
                            {item.title}
                          </Text>
                          <Text
                            fontSize={mobileScreen ? "xs" : "sm"}
                            color="black"
                          >
                            {item.date.toLocaleString("en-US", {
                              timeZone: "Asia/Jakarta",
                            })}
                          </Text>
                        </HStack>
                        <Text
                          fontSize={mobileScreen ? "sm" : "md"}
                          fontWeight="bold"
                          color="black"
                        >
                          {item.sender}
                        </Text>
                        <Text
                          fontSize={mobileScreen ? "xs" : "sm"}
                          color="black"
                        >
                          {item.description}
                        </Text>
                      </Box>
                    </HStack>
                    <Box>
                      <Text
                        fontSize={mobileScreen ? "2rem" : "3rem"}
                        color="red"
                      >
                        {item.unread ? "." : ""}
                      </Text>
                    </Box>
                  </Flex>
                  <Divider
                    mt={5}
                    borderColor="gray"
                    borderWidth="1px"
                    variant="solid"
                  />
                </Box>
              ))}
        </Stack>
      </Box>
    </>
  );
};

export default ChatList;
