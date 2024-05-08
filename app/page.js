import Navbar from "./components/navbar/navbar";
import HomePage from "./homePage/page";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex
        direction="column"
        w="full"
        maxH="100vh"
        maxW="100%"
        overflow="auto"
      >
        <Navbar />
        <Flex direction="column" mt="90px" w="full" h="90vh" overflow="auto">
          <HomePage />
        </Flex>
      </Flex>
    </>
  );
}
