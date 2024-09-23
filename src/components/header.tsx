import { Box, Text } from "@chakra-ui/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      w="100%"
      padding="20px"
      marginTop="80px"
      position="relative"
    >
      <Box
        display="flex"
        justifyContent="center"
        w="100%"
        maxW={{base: "100%", md: "80%"}}
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
          marginLeft={{ base: 0, xl: 200 }}
        >
       <Box
            display="flex"
            justifyContent="center"
            flexDir="column"
            maxW='600px'
       >
       <Text as="h1" color="black" fontSize={{base: '2xl', md: "4xl"}} fontWeight="800" textAlign={{base: 'center', md: 'start'}}>
            LA REVOLUCIÓN EN SERVICIOS  FINANCIEROS BLOCKCHAIN
          </Text>
          <Text as="p" color="black" textAlign={{base: 'center', md: 'start'}}>
            Democratizamos el acceso a servicios financieros de calidad para
            millones de personas des bancarizadas en todo el mundo.
          </Text>
          <Text as="p" color="var(--color-text-primary)" fontSize={{base: 'xl', md: "2xl"}} textAlign={{base: 'center', md: 'start'}}>
            EMPOWERING FREEDOM
          </Text>
       </Box>
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
