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
      <Wrap spacing="30px" align="center">
        <WrapItem>
          <Center w="500px">
            <CardEcosystem />
          </Center>
        </WrapItem>

        <WrapItem>
          <Center w="500px">
            <CardEcosystem />
          </Center>
        </WrapItem>

        <WrapItem>
          <Center w="500px">
            <CardEcosystem />
          </Center>
        </WrapItem>

        <WrapItem>
          <Center w="500px">
            <CardEcosystem />
          </Center>
        </WrapItem>
      </Wrap>
    </Box>
  );
};

export default SectionFour;
