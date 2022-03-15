import React from "react";
import Box from "./Box";
import { css } from "@emotion/react";

// Each component here can have its own file if it is too big

const Typography = (props) => {
  return (
    <Box as={props.as || "p"} {...props}>
      {props.children}
    </Box>
  );
};

const Image = (props) => {
  return (
    <Box as="img" {...props}>
      {props.children}
    </Box>
  );
};

const Flex = (props) => {
  return (
    <Box
      css={css`
        display: flex;
      `}
      {...props}
    >
      {props.children}
    </Box>
  );
};

const Grid = (props) => {
  return (
    <Box
      css={css`
        display: grid;
        place-content:center;
      `}
      {...props}
    >
      {props.children}
    </Box>
  );
};

const Button = (props) => {
  return (
    <Box as="button" css={
      css`
        cursor:pointer;
      `
    } {...props}>
      {props.children}
    </Box>
  );
};

const Container = (props) => {
  return (
    <Box
      css={css`
        max-width: 1440px;
        margin: 0 auto;
      `}
      {...props}
    >
      {props.children}
    </Box>
  );
};

export { Box, Typography, Button, Flex, Container, Image , Grid };
