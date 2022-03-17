import { Box, Button, Container, Flex, Grid } from "../../components/lib";
import Image from "next/image";
import bgImg from "../../public/images/bg-shorten-desktop.svg";
import { css } from "@emotion/react";

export default function Shortner() {
  return (
    <Container 
      css={
        css`
          height:100%;
          background:linear-gradient(#FFF 50%,#F0F1F6 50%)
        `
      }
    >
      
      <Flex
        
        justifyContent="center"
        alignItems="center"
        position="relative"
        mx={["2rem","10rem"]}
        height={[168]}
        css={
          css`
            
            background-image:url("/images/bg-shorten-desktop.svg");
            background-repeat:no-repeat;
            background-size:cover;
            background-color:#3b3054;
            border-radius:10px;
          `
        }
      >
        <Flex
          flexDirection={["column" , "row"]}
          flexWrap="nowrap"
          justifyContent="center"
          alignItems="center"
          width={1}
          px={[0,"2rem"]}
        >
          <input
            css={css`
              width: 100%;
              height: 62px;
              border-radius: 8px;
              &::placeholder {
                padding-left: 10px;
                font-family: "Poppins", sans-serif;
              }

              @media screen and (min-width:40em){
                width:80%;
                height:56px;
              }
            `}
            placeholder="Shorten your link here..."
          />

          <Button
            borderRadius={14}
            ml="1rem"
            px="2rem"
            py="1rem"
            fontFamily="Poppins"
            fontWeight={700}
            bg="cyan"
            border="none"
            fontSize="1.2rem"
            color="white"
          >
            Shorten it
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}
