import { UseIsMobileScreen } from "@/lib";
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
  Text,
} from "@chakra-ui/react";
import { DummyTodo } from "../constant";
import { DateIcon, TimeIcon, EditIcon } from "../icons";
import { useState } from "react";

const TaskMenu = () => {
  const [date, setDate] = useState(new Date());
  const mobileScreen = UseIsMobileScreen();

  const getDaysLeft = (date: Date) => {
    const today = new Date();
    const timeDif = date.getTime() - today.getTime();
    const dif = Math.ceil(timeDif / (1000 * 60 * 60 * 24));

    return dif;
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
          color="black"
          borderColor="black"
          placeholder="My Task"
        >
          <option value="option2">Personal Errands</option>
          <option value="option3">Urgent To-Do</option>
        </Select>
        <Button
          bgColor="#2F80ED"
          color="white"
          size={mobileScreen ? "sm" : "md"}
        >
          New Task
        </Button>
      </HStack>
      <Accordion
        mt={mobileScreen ? 2 : 4}
        color="black"
        overflowX="hidden"
        overflowY="scroll"
        h="calc(100% - 60px)" // Adjust based on header height
      >
        {DummyTodo.map((item, idx) => (
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
                  <Checkbox colorScheme="gray" borderColor="gray" />
                  <Box
                    as="span"
                    textDecor={item.checked ? "line-through" : ""}
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                  >
                    {item.title}
                  </Box>
                  <HStack spacing={mobileScreen ? 2 : 4}>
                    <Text as="span" flex="1" textAlign="left" color="red">
                      {`${getDaysLeft(item.date)} Days Left`}
                    </Text>
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
                        <Text color="black" fontWeight="bold">
                          ...
                        </Text>
                      </MenuButton>
                      <MenuList bgColor="white" color="red">
                        <MenuItem bgColor="white">Delete</MenuItem>
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
                  date={date}
                  onDateChange={setDate}
                />
              </HStack>
              <HStack gap={5} mt={mobileScreen ? 2 : 4}>
                <EditIcon
                  width={mobileScreen ? "32" : "40"}
                  height={mobileScreen ? "32" : "40"}
                  color="#2F80ED"
                />
                <Text>{item.description}</Text>
              </HStack>
            </AccordionPanel>
            <Divider borderColor="gray" borderWidth="1px" variant="solid" />
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default TaskMenu;
