import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import { MenuIcon, ChatIcon, TaskIcon } from "./icons";
import { useState } from "react";
import { Menu } from "@/type";
import TaskMenu from "./menu/TaskList";
import ChatWrapper from "./menu/chat/ChatWrapper";
import { DummyChat } from "./constant";

export const QuicksMenu = () => {
  const [activeMenu, setActiveMenu] = useState<number>(-1);
  const [open, setIsOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setIsOpen(!open);
  };

  const openMenu = (id: number) => {
    if (activeMenu === id) {
      setActiveMenu(-1);
    } else {
      setActiveMenu(id);
    }
  };

  const menuList: Menu[] = [
    {
      name: "Inbox",
      icon: (
        <Button
          size="lg"
          borderRadius="50%"
          width="50px"
          height="50px"
          bg={activeMenu === 0 ? "#8785FF" : "white"}
          _hover={{ bg: "gray.100" }}
          padding={0}
          onClick={() => openMenu(0)}
        >
          <ChatIcon
            width="30"
            height="30"
            color={activeMenu === 0 ? "white" : "#8785FF"}
          />
        </Button>
      ),
      menu: <ChatWrapper setActiveMenu={setActiveMenu} chats={DummyChat} />,
    },
    {
      name: "Task",
      icon: (
        <Button
          size="lg"
          borderRadius="50%"
          width="50px"
          height="50px"
          bg={activeMenu === 1 ? "#F8B76B" : "white"}
          _hover={{ bg: "gray.100" }}
          padding={0}
          onClick={() => openMenu(1)}
        >
          <TaskIcon
            width="30"
            height="30"
            color={activeMenu === 1 ? "white" : "#F8B76B"}
          />
        </Button>
      ),
      menu: <TaskMenu />,
    },
  ];

  return (
    <Box pos={"fixed"} left={"auto"} right={"1%"} bottom={"2%"} mr={2} mb={2}>
      <HStack
        display={"flex"}
        gap={5}
        flexDir={activeMenu !== 1 ? "row-reverse" : "row"}
      >
        <Box mt={8} display={activeMenu !== -1 ? "none" : "inline"}>
          <Button
            size="lg"
            borderRadius="50%"
            width="50px"
            height="50px"
            bg="blue.500"
            color="white"
            _hover={{ bg: "blue.600" }}
            padding={0}
            onClick={() => handleMenu()}
          >
            <MenuIcon width="56" height="56" color="white" />
          </Button>
        </Box>
        {menuList.map((item, idx) => (
          <Stack
            key={idx}
            alignItems={"center"}
            transition="transform 0.5s ease"
            transform={
              open
                ? `translateX(-${(idx + 1) * 10})`
                : `translateX(${(idx + 1) * 10}px)`
            }
            opacity={open ? 1 : 0}
          >
            <Text color={"white"} display={activeMenu !== -1 ? "none" : "inline"}>
              {item.name}
            </Text>
            <Box pos={"relative"} display={"inline-block"}>
              <Box
                display={activeMenu === idx ? "inline" : "none"}
                backgroundColor="#4F4F4F"
                borderRadius="50%"
                width="50px"
                height="50px"
                pos={"absolute"}
                transform="translateX(-10px)"
                zIndex={0}
              ></Box>
              {item.icon}
            </Box>
            <Box
              display={activeMenu === idx ? "inline" : "none"}
              position="absolute"
              top="100%"
              right="10px"
            >
              {item.menu}
            </Box>
          </Stack>
        ))}
      </HStack>
    </Box>
  );
};
