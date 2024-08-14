import { UseIsMobileScreen } from "@/lib"
import { Box, Text } from "@chakra-ui/react"

const TaskMenu = () => {
    const mobileScreen = UseIsMobileScreen();

    return (
        <Box
            position="absolute"
            bottom={"7vh"}
            right={"5%"}
            width={mobileScreen ? "30vh" : "80vh"}
            height={mobileScreen ? "50vh" : "70vh"}
            bg="white"
            boxShadow="lg"
            borderRadius="md"
            p={4}
            zIndex={10}
        >
            <Text fontWeight="bold">Task</Text>
            <Text>This is the Task screen content.</Text>
        </Box>
    )
}

export default TaskMenu;