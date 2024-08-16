"use client";

import {
  Box,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SeachIcon } from "@/components/icons";
import { MobileScreen } from "@/lib";
import { QuicksMenu } from "@/components";

export default function Home() {
  const IsMobileScreen = MobileScreen();

  return (
    <Grid
      templateColumns={IsMobileScreen ? "1fr" : "3fr 8fr"}
      minW={"100vw"}
      minH={"100vh"}
    >
      {IsMobileScreen ? null : (
        <GridItem
          position={"sticky"}
          top={0}
          overflow={"hidden"}
          borderRight={"1px solid #DEDEDE"}
          height={"100vh"}
        ></GridItem>
      )}
      <GridItem
        overflow={"auto"}
        pos={"relative"}
        display={"flex"}
        flexDir={"column"}
        minH={"100vh"}
        mx={IsMobileScreen ? "10%" : ""}
      >
        <Box>
          <InputGroup bgColor={"#4F4F4F"}>
            <InputLeftElement pointerEvents="none">
              <SeachIcon width={"18"} height={"17"} color="white" />
            </InputLeftElement>
            <Input variant={"filled"} colorScheme={"#4F4F4F"} width={"100%"} />
          </InputGroup>
        </Box>
        <QuicksMenu />
      </GridItem>
    </Grid>
  );
}
