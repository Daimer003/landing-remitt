import { Box, Text } from "@chakra-ui/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      position="relative"
      w="100%"
      padding="20px"
      marginTop="80px"
    >
      <Box
        display="flex"
        justifyContent="center"
        w="100%"
        maxW="80%"
        flexDir="column"
        minH="615px"
        backdropFilter="auto"
        backdropBlur="8px"
        opacity={1}
        position="relative"
        zIndex={5}
        borderRadius="20px"
        bg="rgba(0,0,0, 1%)"
        padding="20px"
      >
        <Box
          display="flex"
          justifyContent="center"
          flexDir="column"
          marginLeft={{ base: "0", xl: 200 }}
        >
          <Text as="h1" color="black" fontSize="4xl" fontWeight="800">
            LA REVOLUCIÓN EN SERVICIOS <br /> FINANCIEROS BLOCKCHAIN
          </Text>
          <Text as="p" color="black">
            Democratizamos el acceso a servicios financieros de calidad para{" "}
            <br />
            millones de personas des bancarizadas en todo el mundo.
          </Text>
          <Text as="p" color="var(--color-text-primary)" fontSize="2xl">
            EMPOWERING FREEDOM
          </Text>
        </Box>
      </Box>

      {/* ANIMACIÓN LOTTIE */}
      <Box display="flex" w="50%" right={0} position="absolute" zIndex={0}>
        <DotLottieReact src="/assets/row.json" loop autoplay />
      </Box>
    </Box>
  );
};

export default Header;
