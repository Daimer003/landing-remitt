import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const SectionTwo = () => {
  return (
    <Box w="100%" marginTop="80px" padding="20px">
      <Box display="flex" flexDir="column" alignItems="center" gap="30px">
        <Box w="100%" maxW="600px">
          <Image
            src="/assets/image-2.webp"
            alt=""
            width={200}
            height={200}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
        <Box>
          <Text as="p" color="black" textAlign="center">
            Trabajamos para impulsar la libertad financiera de millones de
            personas desbancarizadas alrededor del mundo
          </Text>
          <Text as="p" color="black" fontWeight="700" textAlign="center">
            Nuestros objetivos convergen con la ONU y el Banco Mundial
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionTwo;
