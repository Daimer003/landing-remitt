import { IconSvg1, IconSvg2, IconSvg3 } from "@/lib/icons";
import { Box } from "@chakra-ui/react";

const SectionEight = () => {
  return (
    <Box w="100%" padding="20px" marginTop="80px">
      <Box
        display="flex"
        justifyContent="center"
        gap="20px"
        bg="var(--bg-gradient-card)"
        borderRadius="20px"
      >
        <Box
          w="300px"
          h="300px"
          display="flex"
          alignItems="center"
          gap="20px"
          position="relative"
        >
          <Box
            display="flex"
            position="absolute"
            right={0}
            top={50}
            border="1px solid #fff"
            css={{ backdropFilter: "blur(6px)" }}
            bg="#dbdbdb53"
            borderRadius="28px"
            padding="30px"
            margin={5}
          >
            <IconSvg1 size="30" />
          </Box>
          <Box
            display="flex"
            position="absolute"
            left={0}
            bottom={50}
            border="1px solid #fff"
            css={{ backdropFilter: "blur(6px)" }}
            bg="#dbdbdb53"
            borderRadius="28px"
            padding="30px"
            margin={5}
          >
            <IconSvg2 size="30" />
          </Box>
        </Box>

        <Box
          w="300px"
          h="300px"
          display="flex"
          alignItems="center"
          gap="20px"
          position="relative"
        >
          <Box
            display="flex"
            position="absolute"
            right={6}
            top={50}
            border="1px solid #fff"
            css={{ backdropFilter: "blur(6px)" }}
            bg="#ffffff52"
            borderRadius="28px"
            padding="30px"
            margin={5}
          >
            <IconSvg3 size="30" />
          </Box>
          <Box
            display="flex"
            position="absolute"
            left={6}
            bottom={50}
            border="1px solid #fff"
            css={{ backdropFilter: "blur(6px)" }}
            bg="#dbdbdb53"
            borderRadius="28px"
            padding="30px"
            margin={5}
          >
            <IconSvg1 size="30" />
          </Box>
        </Box>
        <Box
          w="300px"
          h="300px"
          display="flex"
          alignItems="center"
          gap="20px"
          position="relative"
        >
          <Box
            display="flex"
            position="absolute"
            right={0}
            top={50}
            border="1px solid #fff"
            css={{ backdropFilter: "blur(6px)" }}
            bg="#dbdbdb53"
            borderRadius="28px"
            padding="30px"
            margin={5}
          >
            <IconSvg1 size="30" />
          </Box>
          <Box
            display="flex"
            position="absolute"
            left={0}
            bottom={50}
            border="1px solid #fff"
            css={{ backdropFilter: "blur(6px)" }}
            bg="#dbdbdb53"
            borderRadius="28px"
            padding="30px"
            margin={5}
          >
            <IconSvg1 size="30" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionEight;
