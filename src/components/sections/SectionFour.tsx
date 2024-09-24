import { Box, Wrap, WrapItem, Center } from "@chakra-ui/react";
import CardEcosystem from "../cards/card-ecosystem";

const SectionFour = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="100%"
      padding="20px"
      marginTop="80px"
    >
      <Box
        display="flex"
        w="100%"
        flexDir="column"
        justifyContent="center"
        gap="20px"
      >
        <Box
          display="flex"
          w="100%"
          flexDir={{ base: "column", lg: "row" }}
          justifyContent="center"
          alignItems="center"
          gap="20px"
        >
          <CardEcosystem />
          <CardEcosystem />
        </Box>

        <Box
          display="flex"
          w="100%"
          flexDir={{ base: "column", lg: "row" }}
          justifyContent="center"
          alignItems="center"
          gap="20px"
        >
          <CardEcosystem />
          <CardEcosystem />
        </Box>
      </Box>
    </Box>
  );
};

export default SectionFour;
