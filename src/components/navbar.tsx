import {
  Box,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import NextLink from "next/link";

interface LinkItemProps {
  href: string;
  path: string;
  target?: string;
  children: React.ReactNode;
  props?: any;
}

const LinkItem = ({
  href,
  path,
  target,
  children,
  ...props
}: LinkItemProps) => {
  return (
    <NextLink href={href} passHref target={target}>
      <Box
        p={2}
        width="100%"
        display="inline-flex"
        alignItems="center"
        gap="5px"
        fontSize='xl'
        color='black'
        {...props}
      >
        {children}
      </Box>
    </NextLink>
  );
};

const Navbar = (props: any) => {
  const { path } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="nav"
      display="flex"
      w="100%"
      maxW="1600px"
      padding="10px"
      css={{ backdropFilter: "blur(6px)" }}
      bg="#dbdbdb53"
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
        <Stack
        display={{ base: "none", md: "flex" }}
        direction={{ base: "column", md: "row" }}
        width={{ base: "full", md: "auto" }}
        justifyContent='center'
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
         <LinkItem href="/works" path={path}>
         Nosotros
        </LinkItem>
        <LinkItem href="/works" path={path}>
        Ecosistema
        </LinkItem>
        <LinkItem href="/works" path={path}>
        Road map
        </LinkItem>
  
      </Stack>
       
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
