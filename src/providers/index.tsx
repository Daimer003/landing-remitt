import theme from "@/lib/theme";
import { ChakraProvider } from "@chakra-ui/react";

type Prop = {
  children: any;
};

const Providers = ({ children }: Prop) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Providers;
