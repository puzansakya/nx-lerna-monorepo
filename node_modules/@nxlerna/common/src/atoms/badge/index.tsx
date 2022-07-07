import React from 'react'
import { Badge as ChakraBadge } from "@chakra-ui/react";
export const Badge = (props: any) =>  {
  const {label} = props
    return (
    <ChakraBadge>{label}</ChakraBadge>
  )
}
