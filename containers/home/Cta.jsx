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
        mx={["2rem", 0]}
        mb={[0]}
        height={250}
        css={css`
          background-image: url("/images/bg-boost-mobile.svg");
          background-repeat: no-repeat;
          
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
          <Box as="p" color="white" fontSize={36} fontWeight={700} m={20}>
            Boost your links today
          </Box>
          <Box >
            <Button
              borderRadius={36}
              px="2.5rem"
              py="0.5rem"
              bg="cyan"
              fontFamily="Poppins"
              fontWeight={600}
              border="none"
              color="white"
              fontSize={20}
            >
              Get Started
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
