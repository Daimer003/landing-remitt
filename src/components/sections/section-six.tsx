import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Gradient from "./gradient";

const SectionSix = () => {
  return (
    <Box
      w="100%"
      display="flex"
      position="relative"
      padding="20px"
      marginTop="180px"
    >
      <Gradient right={-100} top={-200} background="var(--gradient-1)" />

      <Box
        display="flex"
        w='100%'
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        border="1px solid #fff"
        css={{ backdropFilter: "blur(6px)" }}
        bg="#ffffff8e"
        padding="20px 20px 80px"
        borderRadius="20px"
      >
        <Box
          display="flex"
          alignItems="center"
          position="absolute"
          top="-100px"
          zIndex={15}
        >
          <Box maxW="250px" w="100%">
            <Image
              src="/assets/card-1.webp"
              alt="Imagen card ganancia"
              width={300}
              height={300}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
          <Box maxW="300px" w="100%">
            <Image
              src="/assets/card-2.webp"
              alt="Imagen card ganancia"
              width={500}
              height={300}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
          <Box maxW="250px" w="100%">
            <Image
              src="/assets/card-3.webp"
              alt="Imagen card ganancia"
              width={300}
              height={300}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Box>

        <Box
          display="flex"
          maxW="1200px"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          marginTop="300px"
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
      </Box>
    </Box>
  );
};

export default SectionSix;
