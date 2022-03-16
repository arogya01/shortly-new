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
        mx={["2rem","16rem"]}
        height={[168]}
        css={
          css`
            
            background-image:url("/images/bg-shorten-desktop.svg");
            background-repeat:no-repeat;
            background-color:#3b3054;
            border-radius:10px;
          `
        }
      >
        <Flex
          flexDirection={["column" , "row"]}
          flexWrap="nowrap"
          alignItems="center"
          zIndex={5}
        >
          <input
            css={css`
              width: 100%;
              height: 42px;
              border-radius: 8px;
              margin-bottom:1rem;
              &::placeholder {
                padding-left: 10px;
                font-family: "Poppins", sans-serif;
              }

              @media screen and (min-width:40em){
                width:540px;
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
