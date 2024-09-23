import { Box, Button, Text } from "@chakra-ui/react";
import CardFooter from "./cards/card-footer";
import Image from "next/image";

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      bg="var(--bg-footer)"
      w="100%"
      marginTop="80px"
      position="relative"
    >
      <Box
        display="flex"
        top="-50px"
        gap="20px"
        w="100%"
        maxW="1600px"
        position="absolute"
        padding='20px'
      >
        <Box
          display="flex"
          w="100%"
          alignItems="center"
          justifyContent="center"
          bg="var(--bg-gradient-card-3)"
          borderRadius="50px"
          padding="30px 20px"
        >
          <Text as="p">
            Según "The World Bank" Alrededor de 2000M de personas alrededor del
            mundo están desbancarizadas, esto representa el 20% de la población.
          </Text>
          <Button minW="200px" bg="white" color="black" borderRadius="50px">
            Comprar token
          </Button>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        w="100%"
        marginTop="80px"
      >
        <Box w="100%" textAlign="center" margin="40px 0">
          <Text as="span" color="white" fontSize="4xl" textAlign="center">
            Road map
          </Text>
        </Box>

        <Box
          display="flex"
          flexDir={{ base: "column", lg: "row" }}
          w="100%"
          maxW="1600px"
          padding="20px"
          justifyContent="center"
          gap="40px"
        >
          <Box display="flex" flexDir="column" gap="20px" w="100%">
            <Text as="span" color="white" fontSize="2xl" textAlign="center">
              Q3 2022
            </Text>
            <CardFooter background="var(--bg-footer-card-1)" />
            <CardFooter background="var(--bg-footer-card-1)" />
          </Box>

          <Box display="flex" flexDir="column" gap="20px" w="100%">
            <Text as="span" color="white" fontSize="2xl" textAlign="center">
              Q4 2023
            </Text>
            <CardFooter background="var(--bg-footer-card-1)" />
            <CardFooter background="var(--bg-footer-card-2)" />
            <CardFooter background="var(--bg-footer-card-3)" />
          </Box>
          <Box display="flex" flexDir="column" gap="20px" w="100%">
            <Text as="span" color="white" fontSize="2xl" textAlign="center">
              Q1 2024
            </Text>
            <CardFooter background="var(--bg-footer-card-1)" />
            <CardFooter background="var(--bg-footer-card-2)" />
            <CardFooter background="var(--bg-footer-card-3)" />
          </Box>
          <Box display="flex" flexDir="column" gap="20px" w="100%">
            <Text as="span" color="white" fontSize="2xl" textAlign="center">
              Q2 2024
            </Text>
            <CardFooter background="var(--bg-footer-card-1)" />
          </Box>
        </Box>

        <Box display="flex" gap="40px" margin="40px 0" alignItems="center">
          <Box w="200px" h="auto">
            <Image
              src="/assets/remitt-logo-blanco.webp"
              alt="Imagen de binance"
              width={100}
              height={100}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
          <Box w="80px" h="auto">
            <Image
              src="/assets/certificado.webp"
              alt="Imagen de binance"
              width={100}
              height={100}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
          <Box w="200px" h="auto">
            <Image
              src="/assets/binace-chain.webp"
              alt="Imagen de binance"
              width={100}
              height={100}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          w="100%"
          bg="var(--bg-footer-2)"
        >
          <Box
            display="flex"
            flexDir="row"
            w="100%"
            maxW="1600px"
            justifyContent="space-between"
            padding="20px"
          >
            <Box w="100%">
              <Text as="span">
                © Remitt 2023. Todos los derechos reservados.
              </Text>
            </Box>
            <Box display="flex" gap="30px" w="320px">
              <Text as="span">Privacy Policy</Text>
              <Text as="span">Terms of Service</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
