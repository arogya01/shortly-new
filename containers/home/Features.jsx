import { Box, Button, Container, Flex } from "../../components/lib";
import Image from "next/image";
import working from "../../public/images/working.svg";
import icon from "../../public/images/icon-fully-customizable.svg";
import { css } from "@emotion/react";

const Cards = () => {
  return (
    <Flex
      position="relative"
      py="3rem"
      mx="1rem"
      flexDirection="column"
      flexWrap="wrap"
      borderRadius={4}
      px="1rem"
      css={css`
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
          rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      `}
    >
      <Box
        position="absolute"
        top="-1.5rem"
        bg="purple"
        p="1rem"
        css={css`
          border-radius: 50%;
        `}
      >
        <Image src={icon} alt="some" width={36} height={36} />
      </Box>
      <Box as="h3">Brand Recognition</Box>
      <p>
        Track how your links are performing across the web with our advanced
        statistical dashboard
      </p>
    </Flex>
  );
};

export default function Features() {
  return (
    <Container>
      <Flex
        flexDirection="column"
        flexWrap="wrap"
        alignItems="center"
        py="4rem"
        
      >
        <Box textAlign="center" pb="4rem">
          <Box as="h2" fontWeight={800} fontSize="1.5rem">
            Advanced Statistics
          </Box>
          <Box as="p" color="gray" textAlign="center">
            Build your brand's recognition and get detailed insight <br /> into
            how the links are performing
          </Box>
        </Box>

        <Flex flexDirection="row" flexWrap="nowrap" px="16rem">
          <Cards />
          <Cards />
          <Cards />
        </Flex>
      </Flex>
    </Container>
  );
}
