import { Box, Button, Container, Flex } from "../../components/lib";
import Image from "next/image";
import working from "../../public/images/working.svg";
import { css } from "@emotion/react";
export default function HeroSection() {
  return (
    <Container>
      <Flex
        as="section"
        pl={["2rem", "10rem"]}
        pr={["2rem", 0]}
        pb="4rem"
        flexDirection={["column-reverse","row"]}
        alignItems="center"
        flexWrap="nowrap"
      >
        <Flex flexDirection="column" flexWrap="wrap" textAlign={["center", "initial"]}>
          <Box fontWeight={700} color="fontBlack" lineHeight={1.2} fontSize={[28,68]} letterSpacing={-2}>
            <Box as="p" m={0}>
              More than just
            </Box>
            <Box as="p" m={0}>
              Shorter Links
            </Box>
          </Box>
          <Box color="gray" fontSize={[14,18]} lineHeight={1.5}>
            <Box as="p">
              Build your brand's recognition and get detailed <br/> insights
              into how the links are performing
            </Box>
          </Box>
          <Box>
            <Button
              borderRadius={32}
              px="2rem"
              py="1rem"
              fontFamily="Poppins"
              fontWeight={600}
              bg="cyan"
              border="none"
              fontSize="1rem"
              color="white"
            >
              Get Started
            </Button>
          </Box>
        </Flex>

        <Box>
          <Image src={working} alt="working" />
        </Box>
      </Flex>
    </Container>
  );
}
