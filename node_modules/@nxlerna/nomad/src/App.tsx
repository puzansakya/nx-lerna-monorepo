import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, RigoProvider, Badge, Container } from "@nxlerna/common";
function App() {
  return (
    <RigoProvider>
      <Container maxW="container.md" bg="red.200">
        <Badge label="asdf" />
      </Container>
    </RigoProvider>
  );
}

export default App;
