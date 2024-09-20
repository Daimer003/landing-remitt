import { Box, Text } from "@chakra-ui/react";
import CardFooter from "./cards/card-footer";

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      bg="var(--bg-footer)"
      w="100%"
      padding="20px"
      marginTop="80px"
    >
      <Box w="100%" maxW="1600px">
        <Box w="100%" textAlign="center" margin="40px 0">
          <Text as="span" color="white" fontSize="4xl" textAlign="center">
            Road map
          </Text>
        </Box>
        <Box display="flex" flexDir="row" w="100%">
          <Box display="flex" flexDir="column" gap="20px" w="100%">
            <CardFooter />
            <CardFooter />
            <CardFooter />
          </Box>
          <Box display="flex" flexDir="column" gap="20px" w="100%">
            <CardFooter />
            <CardFooter />
            <CardFooter />
          </Box>
          <Box display="flex" flexDir="column" gap="20px" w="100%">
            <CardFooter />
            <CardFooter />
            <CardFooter />
            <CardFooter />
            <CardFooter />
          </Box>
          <Box display="flex" flexDir="column" gap="20px" w="100%">
            <CardFooter />
            <CardFooter />
            <CardFooter />
          </Box>
        </Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Footer;
