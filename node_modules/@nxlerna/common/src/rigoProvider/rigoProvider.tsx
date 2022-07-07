import { ChakraProvider } from "@chakra-ui/react";

export const RigoProvider = (props: any) => {
  const { children } = props;
  return <ChakraProvider>{children}</ChakraProvider>;
}
