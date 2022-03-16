import { Box, Button, Container, Flex } from "../../components/lib";
import Image from "next/image";
import working from "../../public/images/working.svg";
import { css } from "@emotion/react";
export default function HeroSection() {
  return (
    <Container>
      <Flex
        as="section"
        pl={["2rem", "16rem"]}
        pr={["2rem", " "]}
        pb="4rem"
        flexDirection={["column-reverse","row"]}

        flexWrap="nowrap"
      >
        <Flex flexDirection="column" flexWrap="wrap" textAlign={["center"]}>
          <Box fontWeight={800} fontSize={[28,42]}>
            <Box as="p" m={0}>
              More than Just
            </Box>
            <Box as="p" m={0}>
              Shorter Links
            </Box>
          </Box>
          <Box color="gray" fontSize={[14,20]}>
            <Box as="p">
              Build your brand's recognition and get detailed insight <br />{" "}
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
