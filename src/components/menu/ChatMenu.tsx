import { UseIsMobileScreen } from "@/lib";
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
import { SeachIcon, UserIcon } from "../icons";
import { DummyChat } from "../constant";

const ChatMenu = () => {
  const mobileScreen = UseIsMobileScreen();

  const getInitial = (title: string) => {
    let initial = title.substring(0, 1);
    return initial;
  };

  return (
    <Box
      position="absolute"
      bottom={mobileScreen ? "5vh" : "7vh"}
      right={mobileScreen ? "2%" : "5%"}
      width={mobileScreen ? "80vw" : "80vh"}
      height={mobileScreen ? "60vh" : "70vh"}
      bg="white"
      boxShadow="lg"
      borderRadius="md"
      p={mobileScreen ? 2 : 4}
      zIndex={10}
    >
      <Stack spacing={mobileScreen ? 3 : 4}>
        <InputGroup>
          <Input
            color="black"
            variant="outline"
            borderColor="black"
            width="100%"
            _placeholder={{ pl: 5, color: "black" }}
            placeholder="Search"
          />
          <InputRightElement pointerEvents="none" mr={5}>
            <SeachIcon width="18" height="17" color="black" />
          </InputRightElement>
        </InputGroup>
      </Stack>
      <Box height={mobileScreen ? "50vh" : "60vh"} overflowY="auto" mx={2}>
        <Stack mt={5} gap={mobileScreen ? 4 : 10} mx={2}>
          {DummyChat.map((item, idx) => (
            <>
              <Flex
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                key={idx}
              >
                <HStack gap={mobileScreen ? 10 : 14} alignItems="center">
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
                      <Text fontSize={mobileScreen ? "sm" : "md"} color="blue">
                        {item.title}
                      </Text>
                      <Text fontSize={mobileScreen ? "xs" : "sm"} color="black">
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
                    <Text fontSize={mobileScreen ? "xs" : "sm"} color="black">
                      {item.message}
                    </Text>
                  </Box>
                </HStack>
                <Box>
                  <Text fontSize={mobileScreen ? "2rem" : "3rem"} color="red">
                    {item.unread ? "." : ""}
                  </Text>
                </Box>
              </Flex>
              <Divider borderColor="gray" borderWidth="1px" variant="solid" />
            </>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default ChatMenu;
