import { Box, Text, Button } from "@chakra-ui/react";
import Image from "next/image";

const SectionFive = () => {
  return (
    <Box w="100%" padding="20px" marginTop="80px">
      <Box
        display="flex"
        flexDir="column"
        w="100%"
        justifyContent="center"
        alignItems="center"
        gap="30px"
      >
        <Box
          display="flex"
          maxW="1200px"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
        >
          <Text
            as="h5"
            color="black"
            fontSize="xl"
            fontWeight="300"
            textAlign="center"
          >
            DESCUBRE NUESTRO PODEROSO
          </Text>
          <Text
            as="span"
            color="black"
            fontSize="4xl"
            fontWeight="800"
            textAlign="center"
          >
            Ecosistema financiero
          </Text>
          <Text as="p" color="black" fontSize="xl" textAlign="center">
            Nos enorgullece ofrecer mucho más que una plataforma de remesas.
            Somos una comunidad global comprometida con la inclusión financiera,
            donde todos tienen el derecho de acceder a servicios modernos y
            eficientes.
          </Text>
        </Box>

        <Box w="200px">
          <Button w="200px" variant="buttonPrimary">
            Comprar Token
          </Button>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          w="100%"
          bg="var(--bg-component)"
          borderRadius="20px"
        >
          <Box
            width="100%"
            maxW="600px"
            height="auto"
            backgroundImage="/assets/ecosystem-app-bg.webp"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            padding="16px"
          >
            <Image
              src="/assets/ecosystem-app.webp"
              alt="Imagen del ecosistema"
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

export default SectionFive;
