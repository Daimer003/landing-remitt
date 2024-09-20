import { Box } from "@chakra-ui/react";

const CardFooter = () => {
  return (
    <Box
      w="100%"
      maxW="300px"
      borderRadius="16px"
      border="1px solid var(--color-border-2)"
      padding="20px 10px"
    >
      <Box display="flex" justifyContent="space-between">
        <Box>ICON</Box>
        <Box>TEXT</Box>
        <Box>ICON</Box>
      </Box>
    </Box>
  );
};

export default CardFooter;
