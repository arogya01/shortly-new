import { Box, Button, Container, Flex } from "../../components/lib";
import Image from "next/image";
import bgImg from "../../public/images/bg-shorten-desktop.svg";

export default function Cta() {
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
        ></Flex>
      </Flex>
    </Container>
  );
}
