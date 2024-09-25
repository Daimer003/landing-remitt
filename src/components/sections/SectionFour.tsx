import { Box } from "@chakra-ui/react";
import CardEcosystem from "../cards/card-ecosystem";
import Gradient from "./gradient";

const SectionFour = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="100%"
      padding="20px"
      marginTop="80px"
      position="relative"
    >
      <Gradient left={-100} top={-200} background="var(--gradient-2)" />

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
