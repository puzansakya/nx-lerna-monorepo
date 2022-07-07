import styles from "./button.module.scss";
import { Button as ChagraButton } from "@chakra-ui/react";
/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: any) {
  const {children, ...rest} = props
  return (
    <ChagraButton {...rest} >
      {children}
    </ChagraButton>
  );
}

export default Button;
