import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import parse from "html-react-parser";

interface Props {
  image: string;
  title: string;
  subTitle: string;
  text: string;
  background: string;
  direction: string;
}

const CardSection = ({
  image,
  title,
  subTitle,
  text,
  background,
  direction,
}: Props) => {
  return (
    <Box w="100%" position="relative" padding="20px">
      <Box
        w="100%"
        position="relative"
        borderRadius="20px"
        bg={background}
        overflow="hidden"
      >
        <Box
          display="flex"
          flexDir={{ base: "column", lg: "row" }}
          alignItems="flex-end"
          w="100%"
        >
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
              {title}
            </Text>
            <Text
              as="span"
              color="var(--color-text)"
              fontSize="4xl"
              fontWeight="800"
            >
              {parse(subTitle)}
            </Text>
            <Text
              as="p"
              color="var(--color-text)"
              fontSize="xl"
              marginTop="40px"
            >
              {parse(text)}
            </Text>
          </Box>
          <Box maxW="500px" w="100%">
            <Image
              src={image}
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

export default CardSection;
