import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const SectionThree = () => {
  return (
    <Box w="100%" position="relative" marginTop="80px" padding="20px">
      <Box
        display="flex"
        flexDir={{base: 'column-reverse', md: 'row'}}
        w="100%"
        bg="var(--bg-gradient-card)"
        borderRadius="20px"
        position="relative"
      >
        <Box w="100%">
          <Image
            src="/assets/platform.webp"
            alt="Imagen de la plataforma"
            width={400}
            height={400}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          w="100%"
          padding="20px"
        >
          <Text as="span" color="white" fontSize="4xl" fontWeight="500">
            TECNOLOGÍA
          </Text>
          <Text as="span" color="white" fontSize="6xl" fontWeight="700">
            BLOCKCHAIN
          </Text>
          <Text as="span" color="var(--color-text-primary)" fontSize="2xl">
            COMO SOLUCIÓN REAL
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionThree;
