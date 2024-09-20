import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const SectionSeven = () => {
  return (
    <Box w="100%" position="relative" marginTop="80px" padding="20px">
      <Box
        w="100%"
        position="relative"
        borderRadius="20px"
        bg="var(--bg-gradient-card-2)"
        overflow="hidden"
      >
        <Box display="flex" w="100%">
          <Box
            display="flex"
            justifyContent="center"
            flexDir="column"
            w="100%"
            padding="20px"
            marginLeft={{ base: "0", xl: "100px" }}
          >
            <Text
              as="span"
              color="var(--color-text)"
              fontSize="2xl"
              fontWeight="400"
            >
              TECNOLOGÍA
            </Text>
            <Text
              as="span"
              color="var(--color-text)"
              fontSize="4xl"
              fontWeight="800"
            >
              BLOCKCHAIN
            </Text>
            <Text as="p" color="var(--color-text)" fontSize="xl">
              COMO SOLUCIÓN REAL
            </Text>
          </Box>
          <Box maxW="500px" w="100%">
            <Image
              src="/assets/enmascarar.webp"
              alt="Imagen de la seccion seven"
              width={400}
              height={400}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionSeven;
