import {
  Box,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="nav"
      display="flex"
      w="100%"
      maxW="1600px"
      padding="10px"
      css={{ backdropFilter: "blur(10px)" }}
      bg="#dbdbdbdc"
      position="fixed"
      zIndex={10}
    >
      <Box
        display={{ base: "none", md: "flex" }}
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        flexDir="row"
      >
        <Box w="140px" h="auto">
          <Image
            src="/assets/logo.webp"
            alt="Logo de remitt"
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>

        <Box display="flex" gap="40px" color="black">
          <Link href="#">Nosotros</Link>
          <Link href="#">Ecosistema</Link>
          <Link href="#">Road map</Link>
        </Box>

        <Box>
          <Button variant="buttonPrimary">Comprar Token</Button>
        </Box>
      </Box>

      <Box
        display={{ base: "flex", md: "none" }}
        w="100%"
        justifyContent="flex-end"
      >
        <Button colorScheme="blue" onClick={onOpen}>
          Menu
        </Button>
      </Box>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="white" color="black">
          <DrawerHeader borderBottomWidth="1px">X</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
