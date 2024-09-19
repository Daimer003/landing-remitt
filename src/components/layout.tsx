import { Box } from "@chakra-ui/react";
import Navbar from "./navbar";

type Prop = {
  children: React.ReactNode;
};

const Layout = ({ children }: Prop) => {
  return (
    <Box
      display="flex"
      w="100%"
      justifyContent="center"
      backdropFilter="auto"
      backdropBlur="8px"
    >
      <Box display="flex" flexDir="column" w="100%" maxW="1600px" h="auto">
        <Navbar />
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
