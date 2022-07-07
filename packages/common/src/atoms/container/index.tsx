import { Container as RigoContainer } from "@chakra-ui/react";

export const Container = (props: any) => {
  const { children, ...rest } = props;
  return <RigoContainer {...rest}>{children}</RigoContainer>;
};
