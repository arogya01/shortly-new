import { Container, Flex, Box } from "../lib";
import facebook from "../../public/images/icon-facebook.svg";
import twitter from "../../public/images/icon-facebook.svg";
import pinterest from "../../public/images/icon-facebook.svg";
import insta from "../../public/images/icon-facebook.svg";
import Logo from "../../public/images/logo-white.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <Container bg="footerBlack">
      <Flex
        flexDirection="row"
        flexWrap="nowrap"
        justifyContent="space-between"
        py="6rem"
        px="10rem"
      >
        <Box pr="1rem">
          <Image src={Logo} alt="lgo" width={140} height={36} layout="fixed" />
        </Box>
        <Flex
          flexDirection="row"
          flexWrap="nowrap"
          justifyContent="space-between"
        >
          <Flex flexDirection="column" flexWrap="wrap" px="2rem" alignItems="flex-start">
            <Box as="h3" pb={2} fontWeight={700} color="white" m={0}>
              Features
            </Box>
            <Box as="p" color="gray" m={0} pb={1} fontSize={"0.8rem"}>
              Link Shortening
            </Box>
            <Box as="p" color="gray" m={0} pb={1} fontSize={"0.8rem"}>
              Branded Links
            </Box>
            <Box as="p" color="gray" m={0} pb={1} fontSize={"0.8rem"}>
              Analytics
            </Box>
          </Flex>
          <Flex flexDirection="column" flexWrap="wrap" px="2rem" alignItems="center">
            <Box as="h3" pb={2} fontWeight={700} color="white" m={0}>
              Features
            </Box>
            <Box as="p" color="gray" m={0} pb={1} fontSize={"0.8rem"}>
              Link Shortening
            </Box>
            <Box as="p" color="gray" m={0} pb={1} fontSize={"0.8rem"}>
              Link Shortening
            </Box>
            <Box as="p" color="gray" m={0} pb={1} fontSize={"0.8rem"}>
              Link Shortening
            </Box>
          </Flex>
          <Flex flexDirection="column" flexWrap="wrap" px="2rem" alignItems="center">
            <Box as="h3" pb={2} fontWeight={700} color="white" m={0}>
              Features
            </Box>
            <Box as="p" color="gray" m={0} pb={1} fontSize={"0.8rem"}>
              Link Shortening
            </Box>
            <Box as="p" color="gray" m={0} pb={1} fontSize={"0.8rem"}>
              Link Shortening
            </Box>
            <Box as="p" color="gray" m={0} pb={1} fontSize={"0.8rem"}>
              Link Shortening
            </Box>
          </Flex>
        </Flex>
        <Flex>
          <Box px={"0.5rem"}>
            <Image src={twitter}   alt="twitter" />
          </Box>
          <Box px={"0.5rem"}>
            <Image src={twitter}   alt="twitter" />
          </Box>
          <Box px={"0.5rem"}>
            <Image src={twitter}   alt="twitter" />
          </Box>
          <Box px={"0.5rem"}>
            <Image src={twitter}   alt="twitter" />
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
