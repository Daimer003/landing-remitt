import { IconArrowDown, IconDollar } from "@/lib/icons";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  background: string;
}

const CardFooter = ({ background }: Props) => {
  return (
    <Box
      w="100%"
      borderRadius="16px"
      border="1px solid var(--color-border-2)"
      padding="20px 10px"
      bg={background}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          border="1px solid white"
          borderRadius="50px"
          w="32px"
          h="32px"
        >
          <IconDollar size="24" />
        </Box>
        <Box>
          <Text as="span">Inicio de operaciones</Text>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          border="1px solid white"
          borderRadius="50px"
          w="32px"
          h="32px"
        >
          <IconArrowDown size="24" />
        </Box>
      </Box>
    </Box>
  );
};

export default CardFooter;
