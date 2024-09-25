import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const CardProduct = () => {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      w="100%"
      h="auto"
      borderRadius="20px"
      border="1px solid #fff"
      css={{ backdropFilter: "blur(6px)" }}
      bg="#fffafa88"
      position="relative"
    >
      <Box display="flex" w="180px" h="180px" position="absolute" top={-100}>
        <Image
          src="/assets/card.webp"
          alt="Imagen de la tarjeta"
          width={200}
          height={200}
        />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        w="100%"
        marginTop={20}
        bg="var(--bg-gradient-card-6)"
        padding="5px"
      >
        <Text as="span" color="black" w="100%" maxW="600px" marginLeft="20px">
          PRODUCTO 2
        </Text>
      </Box>
      <Box display="flow" marginTop={2} maxW="600px" padding="20px">
        <Text as="h3" color="black" marginTop={10}>
          RESERVAS DE VALOR
        </Text>
        <Text as="span" color="black" fontWeight="800" fontSize="2xl">
          Protege tu poder adquisitivo con nuestra opción confiable: el oro y la
          plata.
        </Text>
        <Text as="p" color="black" marginTop={5}>
          En Remitt queremos impulsar tu libertad. Entre el abanico de opciones
          financieras que pondremos a disposición de cada persona alrededor del
          mundo, el lending de prestamos será una de ella.
        </Text>
        <Text as="span" color="black" fontWeight="800" marginTop={5}>
          Ofrecemos excelentes rendimientos y una tasa de interés única en el
          mercado.
        </Text>
      </Box>
    </Box>
  );
};

export default CardProduct;
