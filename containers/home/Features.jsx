import { Box, Button, Container, Flex } from "../../components/lib";
import Image from "next/image";
import working from "../../public/images/working.svg";
import icon from "../../public/images/icon-fully-customizable.svg";
import { css } from "@emotion/react";

export default function Features() {
  return (
    <Container bg="slightWhite">
      <Flex
        flexDirection="column"
        flexWrap="wrap"
        alignItems="center"
        py="4rem"
        
      >
        <Box textAlign="center" pb="4rem" px={["2rem"," "]}>
          <Box as="h2" fontWeight={800} fontSize="2rem" color="fontBlack">
            Advanced Statistics
          </Box>
          <Box as="p" color="gray" textAlign="center">
            Build your brand's recognition and get detailed insight <br /> into
            how the links are performing
          </Box>
        </Box>

        <Flex flexDirection={["column","row"]} flexWrap="nowrap" px={["2rem", "10rem"]}>
          <Cards />
          <Cards />
          <Cards />
        </Flex>
      </Flex>
    </Container>
  );
}



const Cards = () => {
  return (
    <Flex
      position="relative"
      py="2rem"
      color="fontBlack"
      mx={[0, "1rem"]}
      my={["2rem",0]}
      flexDirection="column"
      flexWrap="wrap"
      borderRadius={4}
      px="1rem"
      bg="white"
      css={css`
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      `}
    >
      <Box
        position="absolute"
        top="-1.5rem"
        bg="purple"
        p="1rem"
        css={css`
          border-radius: 50%;
          display:flex;
          justify-content:center;
          align-items:center;
        `}
      >
        <Image src={icon} alt="some" width={36} height={36} />
      </Box>
      <Box as="h3" px={"1rem"} fontSize={18}>Brand Recognition</Box>
      <Box as="p" color="gray" px={"1rem"}>
        Track how your links.Generic Links doesn't mean a thing. Branded links helps instill confidence in your content
      </Box >
    </Flex>
  );
};
