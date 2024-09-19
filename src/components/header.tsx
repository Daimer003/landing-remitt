import { Box, Text } from "@chakra-ui/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Header = () => {
  return (
    <Box display="flex" position="relative" w="100%" padding="20px">
      <Box display="flex" justifyContent="center" flexDir="column" minH="615px">
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

      {/* ANIMACIÓN LOTTIE */}
      <Box display="flex" position="absolute">
        <DotLottieReact src="path/to/animation.lottie" loop autoplay />
      </Box>
    </Box>
  );
};

export default Header;
