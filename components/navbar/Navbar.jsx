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
        px={["2rem", "16rem"]}
        pt="1rem"
        pb="4rem"
        justifyContent={["space-between"," "]}
      >
        <Box pr="1rem">
          <Image src={Logo} alt="lgo" width={152} height={44} layout="fixed" />
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
            borderRadius={32}
            px="2rem"
            fontFamily="Poppins"
            fontWeight={800}
            border="none"
          >
            Login
          </Button>
          <Button
            borderRadius={32}
            px="2rem"
            fontFamily="Poppins"
            fontWeight={600}
            bg="cyan"
            border="none"
          >
            Signup
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}
