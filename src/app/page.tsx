'use client'

import { Box, Button, Grid, GridItem, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SeachIcon, MenuIcon } from "@/components/icons";
import { UseIsMobileScreen } from "@/lib";
import {QuicksMenu} from "@/components"

export default function Home() {
  const IsMobileScreen = UseIsMobileScreen();

  return (
    <Grid templateColumns={IsMobileScreen ? "1fr" : "3fr 8fr"} minW={"100vw"} minH={"100vh"}>
      {IsMobileScreen ? null : (
      <GridItem 
        position={"sticky"}
        top={0}
        overflow={"hidden"} 
        borderRight={"1px solid #DEDEDE"}
        height={"100vh"}
      >
      </GridItem>
      )  
    }
      <GridItem overflow={"auto"} pos={"relative"} display={"flex"} flexDir={"column"} minH={"100vh"} mx={IsMobileScreen ? "10%" : ""}>
        <Box py={1} px={1}>
          <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <SeachIcon width={"18"} height={"17"} color="white" />
          </InputLeftElement>
              <Input variant={"filled"} colorScheme={"#4F4F4F"} width={"100%"}/>
          </InputGroup>
        </Box>
          <QuicksMenu/>
      </GridItem>
    </Grid>
  );
}
