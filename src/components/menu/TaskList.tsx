import React from "react";
import { MobileScreen } from "@/lib";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Divider,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Input,
  Text,
} from "@chakra-ui/react";
import { DummyTodo } from "../constant";
import { DateIcon, TimeIcon, EditIcon } from "../icons";
import { useState } from "react";
import { Task } from "@/type";

const TaskList = () => {
  var [items, setItems] = useState<Task[]>(DummyTodo);
  const [date, setDate] = useState<Date>(new Date());
  const currentDate = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });
  const done: number[] = [];
  const mobileScreen = MobileScreen();

  const getDaysLeft = (date: Date) => {
    const today = new Date();
    const timeDif = date.getTime() - today.getTime();
    const dif = Math.ceil(timeDif / (1000 * 60 * 60 * 24));

    return dif;
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = Number(event.target.id);
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleAddItem = () => {
    const newTodo = {
      id: items.length + 1,
      title: "",
      date: new Date(),
      description: "",
      checked: false,
    };
    setItems(prevItems => [...prevItems, newTodo]);
  };

  const handleDeleteItem = (id: number) => {
    const prevItems = [...items];
    prevItems.splice(id, 1);
    setItems(() => prevItems);
  };

  return (
    <Box
      position="absolute"
      bottom={mobileScreen ? "5vh" : "7vh"}
      right={mobileScreen ? "2%" : "5%"}
      width={mobileScreen ? "90vw" : "80vh"}
      height={mobileScreen ? "60vh" : "70vh"}
      bg="white"
      boxShadow="lg"
      borderRadius="md"
      p={mobileScreen ? 2 : 4}
      zIndex={10}
    >
      <HStack
        display="flex"
        justifyContent="space-between"
        spacing={mobileScreen ? 2 : 4}
      >
        <Select
          width={mobileScreen ? "50%" : "20%"}
          ml={"5vh"}
          _hover={{ borderColor: "black" }}
          color="black"
          borderColor="black"
          placeholder="My Task"
        >
          <option value="option2">Personal Errands</option>
          <option value="option3">Urgent To-Do</option>
        </Select>
        <Button
          _hover={{ color: "black" }}
          bgColor="#2F80ED"
          color="white"
          onClick={() => handleAddItem()}
          size={mobileScreen ? "sm" : "md"}
        >
          New Task
        </Button>
      </HStack>
      <Accordion
        mt={mobileScreen ? 2 : 4}
        allowMultiple={true}
        color="black"
        overflowX="hidden"
        overflowY="scroll"
        h="calc(100% - 60px)" // Adjust based on header height
      >
        {items.map((item, idx) => (
          <AccordionItem key={idx}>
            <h2>
              <AccordionButton>
                <HStack
                  display="flex"
                  w="full"
                  flexDir="row"
                  justifyContent="space-between"
                  spacing={mobileScreen ? 2 : 4}
                >
                  <Checkbox
                    id={idx.toString()}
                    isChecked={
                      item.checked || done.indexOf(idx) !== -1 ? true : false
                    }
                    colorScheme="gray"
                    borderColor="gray"
                    onChange={handleCheckboxChange}
                  />
                  {item.title === "" ? (
                    <Input
                      color="black"
                      variant="outline"
                      maxW={"60%"}
                      borderColor="gray"
                      _placeholder={{ color: "black" }}
                      placeholder="Type Task Title"
                    />
                  ) : (
                    <Box
                      textDecor={item.checked ? "line-through" : ""}
                      flex="1"
                      textAlign="left"
                      fontWeight="bold"
                    >
                      {item.title}
                    </Box>
                  )}
                  <HStack spacing={mobileScreen ? 2 : 4}>
                    {date.toLocaleString("en-US", {
                      timeZone: "Asia/Jakarta",
                    }) === currentDate ? (
                      ""
                    ) : (
                      <Text flex="1" textAlign="left" color="red">
                        {`${getDaysLeft(item.date)} Days Left`}
                      </Text>
                    )}
                    <Text>
                      {
                        item.date
                          .toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
                          .split(",")[0]
                      }
                    </Text>
                    <AccordionIcon />
                    <Menu>
                      <MenuButton as={Button} size={mobileScreen ? "sm" : "md"}>
                        <Text mb={3} color="black" fontWeight="bold">
                          ...
                        </Text>
                      </MenuButton>
                      <MenuList bgColor="white" color="red">
                        <MenuItem
                          bgColor="white"
                          onClick={() => handleDeleteItem(idx)}
                        >
                          Delete
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </HStack>
                </HStack>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} ml={mobileScreen ? 2 : 8}>
              <HStack borderColor="black">
                <TimeIcon
                  width={mobileScreen ? "16" : "20"}
                  height={mobileScreen ? "16" : "20"}
                  color="#2F80ED"
                />
                <SingleDatepicker
                  triggerVariant="input"
                  triggerIcon={
                    <DateIcon
                      width={mobileScreen ? "12" : "15"}
                      height={mobileScreen ? "12" : "15"}
                      color="black"
                    />
                  }
                  propsConfigs={{
                    inputProps: {
                      borderColor: "black",
                    },
                    dayOfMonthBtnProps: {
                      defaultBtnProps: {
                        color: "black",
                        _hover: {
                          background: "blue.600",
                        },
                      },
                      selectedBtnProps: {
                        background: "#0085f230",
                      },
                    },
                    dateNavBtnProps: {
                      color: "black",
                      _hover: {
                        background: "#0085f230",
                      },
                    },
                    popoverCompProps: {
                      popoverContentProps: {
                        background: "white",
                        color: "black",
                        boxShadow: "var(--chakra-shadows-base)",
                      },
                    },
                    calendarPanelProps: {
                      wrapperProps: {
                        borderColor: "green",
                      },
                      contentProps: {
                        borderWidth: 0,
                      },
                      headerProps: {
                        padding: "5px",
                      },
                      dividerProps: {
                        display: "none",
                      },
                    },
                    weekdayLabelProps: {
                      fontWeight: "normal",
                    },
                    dateHeadingProps: {
                      fontWeight: "semibold",
                    },
                  }}
                  name="date-input"
                  date={date || item.date}
                  onDateChange={setDate}
                />
              </HStack>
              <HStack gap={5} mt={mobileScreen ? 2 : 4}>
                <EditIcon
                  width={mobileScreen ? "15" : "18"}
                  height={mobileScreen ? "15" : "18"}
                  color="#2F80ED"
                />
                {item.description === "" ? (
                  <Input
                    color="black"
                    variant="unstyled"
                    maxW={"60%"}
                    borderColor="gray"
                    _placeholder={{ color: "black" }}
                    placeholder="No Description"
                  />
                ) : (
                  <Text>{item.description}</Text>
                )}
              </HStack>
            </AccordionPanel>
            <Divider borderColor="gray" borderWidth="1px" variant="solid" />
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default TaskList;
