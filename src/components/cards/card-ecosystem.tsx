import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const CardEcosystem = () => {
  return (
    <Box display="flex" alignItems="center" w="100%" position="relative">
      <Box display="flex" alignItems="center" w="100%">
        <Box w="60px" display="flex" position="absolute" left={0}>
          <Image
            src="/assets/imagen-ecosystem-1.webp"
            alt="Imagen"
            width={100}
            height={100}
          />
        </Box>
        <Box
          w="100%"
          bg="white"
          border="2px solid var(--color-border-2)"
          padding=" 40px 20px"
          borderRadius="16px"
          marginLeft="30px"
        >
          <Box marginLeft="30px">
            <Text as="h5" fontSize="3xl" fontWeight="800" color="black">
              Inclusión financiera
            </Text>
            <Text as="h5" color="black">
              Inclusión financiera
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardEcosystem;
