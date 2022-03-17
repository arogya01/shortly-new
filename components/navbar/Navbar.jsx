import { Box, Flex, Button, Container } from "../lib";
import Logo from "../../public/images/logo.svg";
import Image from "next/image";
import { css } from "@emotion/react";
import ham from '../../public/images/HamBurger.svg';


export default function Navbar() {
  return (
    <Container>
      <Flex
        flexDirection="row"
        flexWrap="nowrap"
        px={["2rem", "10rem"]}
        pt="3rem"
        pb="1rem"
        alignItems="center"
        justifyContent={["space-between"," "]}
      >
        <Box pr="1rem">
          <Image src={Logo} alt="lgo" width={140} height={36} layout="fixed" />
        </Box>
        <Box 
         css={css`
         element.style {
         }

         @media screen and (min-width: 40em) {
           display: none;
         }
       `}
        >
          <Image src={ham} alt="ham" width={32} height={32} />
        </Box>

        <Flex
          css={css`
            element.style {
            }

            @media screen and (max-width: 40em) {
              display: none;
            }
          `}
          flexDirection="row"
          flexWrap="nowrap"
          px="2rem"
          justifyContent="space-between"
          fontWeight={700}
        >
          <Box as="p" color="gray" px="0.5rem">
            Features
          </Box>
          <Box as="p" color="gray" px="0.5rem">
            Pricing
          </Box>
          <Box as="p" color="gray" px="0.5rem">
            Resources
          </Box>
        </Flex>

        <Flex ml="auto"
         css={css`
         element.style {
         }

         @media screen and (max-width: 40em) {
           display: none;
         }
       `}
        >
          <Button
          color="gray"
            borderRadius={32}
            px="2rem"
            fontFamily="Poppins"
            fontWeight={700}
            border="none"
            bg="white"
          >
            Login
          </Button>
          <Button
            borderRadius={32}
            px="1.5rem"
            py="0.5rem"
            fontFamily="Poppins"
            fontWeight={600}
            bg="cyan"
            border="none"
            color="white"
          >
            Sign up
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}
