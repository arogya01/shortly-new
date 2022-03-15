import { Box, Button, Container, Flex, Grid } from "../../components/lib";
import Image from "next/image";
import bgImg from "../../public/images/bg-shorten-desktop.svg";
import { css } from "@emotion/react";

export default function Shortner() {
  return (
    <Container>
      <Flex
        justifyContent="center"
        alignItems="center"
        position="relative"
        px="16rem"
        pb="4rem"
        height={220}
      >
        <Box
          zIndex={-1}
          left="16rem"
          right="16rem"
          position="absolute"
          borderRadius={10}
          width={928}
          height={160}
        >
          <Image
            src={bgImg}
            alt="bg"
            objectFit="content"
            layout="fill"
            quality={100}
          />
        </Box>
        <Flex
          flexDirection="row"
          flexWrap="nowrap"
          alignItems="center"
          zIndex={5}
        >
          <input
            css={css`
              width: 540px;
              height: 42px;
              border-radius: 8px;

              &::placeholder {
                padding-left: 10px;
                font-family: "Poppins", sans-serif;
              }
            `}
            placeholder="Shorten your link here..."
          ></input>

          <Button
            borderRadius={32}
            ml="1rem"
            px="2rem"
            py="1rem"
            fontFamily="Poppins"
            fontWeight={600}
            bg="cyan"
            border="none"
            
          >
            Shorten it
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}
