import { Box } from "@chakra-ui/react";
import CardProduct from "../cards/card.product";

const SectionEleven = () => {
  return (
    <Box
      display="flex"
      w="100%"
      flexDir={{base:"column", md: "row"}}
      marginTop="140px"
      padding="20px"
      gap={{base: '150px', md: '20px'}}
    >
      <CardProduct />
      <CardProduct />
    </Box>
  );
};

export default SectionEleven;
