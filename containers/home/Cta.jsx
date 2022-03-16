import { Box, Button, Container, Flex } from "../../components/lib";
import Image from "next/image";
import bgImg from "../../public/images/bg-shorten-desktop.svg";
import { css } from "@emotion/react";

export default function Cta() {
  return (
    <Container>
      <Flex
        justifyContent="center"
        alignItems="center"
        position="relative"
        mx={["2rem", "16rem"]}
        mb={["12rem"]}
        height={168}
        css={css`
          background-image: url("/images/bg-boost-mobile.svg");
          background-repeat: no-repeat;
          border-radius: 10px;
          background-color: #3b3054;

          @media screen and (min-width: 40em) {
            background-image: url("/images/bg-boost-desktop.svg");
            background-repeat: no-repeat;
          }
        `}
      >
        <Flex
          as="section"
          flexDirection="column"
          flexWrap="wrap"
          alignItems="center"
        >
          <Box as="p" color="white">
            Get Your links Shortened Now
          </Box>
          <Box pt="1rem">
            <Button
              borderRadius={32}
              px="2rem"
              bg="cyan"
              fontFamily="Poppins"
              fontWeight={800}
              border="none"
            >
              Login
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
