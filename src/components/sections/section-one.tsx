import { Box, AspectRatio, Text } from "@chakra-ui/react";

const SectionOne = () => {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      w="100%"
      gap="30px"
      padding="20px"
    >
      <Box>
        <Text as="h3" color="black" fontSize="4xl" fontWeight="800">
          Bienvenido a Remitt
        </Text>
        <Text as="p" color="black" textAlign="center">
          Conecte su billetera para comenzar
        </Text>
      </Box>

      <Box maxW="960px" width="100%" borderRadius="8px">
        <AspectRatio maxW="960px" ratio={2}>
          <Box
            as="video"
            controls
            autoPlay
            borderRadius="20px"
            border="2px solid  #01DBE7" // Agregamos el borde de color rojo
            src="https://firebasestorage.googleapis.com/v0/b/remitt-5fd4c.appspot.com/o/VIDEOS%2FRemitt%20%20Esp%20FHD%20Final.mp4?alt=media&token=f47817ef-d97d-47d1-a164-9a008d13038f"
          >
            <source
              type="video/mp4"
              src="https://firebasestorage.googleapis.com/v0/b/remitt-5fd4c.appspot.com/o/VIDEOS%2FRemitt%20%20Esp%20FHD%20Final.mp4?alt=media&token=f47817ef-d97d-47d1-a164-9a008d13038f"
            />
          </Box>
        </AspectRatio>
      </Box>
    </Box>
  );
};

export default SectionOne;
