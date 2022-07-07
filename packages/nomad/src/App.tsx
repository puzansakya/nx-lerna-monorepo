import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RigoProvider, Badge, Container } from "@nxlerna/common";
import { Button } from "@nxlerna/ui";

function App() {
  return (
    <RigoProvider>
      <Container maxW="container.md" bg="red.200">
        <Badge label="asdf" />
        <Button>as</Button>
      </Container>
    </RigoProvider>
  );
}

export default App;
