"use client";
import { Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Practice() {
  return (
    <>
      <h1 style={{ color: "blue", fontSize: "20px" }}>Hello</h1>
      <h2>Wolrd</h2>
      <p>this is a paragraph</p>
      <Heading>this is heading by chakra</Heading>
      <Heading as="h1" color="red" fontSize={"40px"}>
        this is h1 heading by chakra
      </Heading>
      <Heading as="h3" color={"blue"}>
        this is h3 heading by chakra
      </Heading>
      <Text fontWeight={"bold"}>this is paragraph by chakra</Text>
      <div>Flexbox</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems:"center",
          backgroundColor: "green",
          height: "300px",
        }}
      >
        <div
          style={{ backgroundColor: "red", padding: "50px", height: "100px" }}
        >
          b1
        </div>
        <div
          style={{
            backgroundColor: "blue",
            padding: "50px",
            height: "100px"
          }}
        >
          b2
        </div>
        <div
          style={{
            backgroundColor: "orange",
            padding: "50px",
            height: "100px"
          }}
        >
          b3
        </div>
      </div>
    </>
  );
}
