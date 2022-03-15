import {Box , Flex , Button, Container} from '../lib';
import Logo from '../../public/images/logo.svg';
import Image from 'next/image';

export default function Navbar(){
    return (
        <Container>
        <Flex flexDirection="row" flexWrap="nowrap" px="16rem" py="1rem" pb="4rem">
        <Box pr="1rem">
        <Image src={Logo} alt="lgo" width={152} height={44} /> 
        </Box>
        <Flex flexDirection="row" flexWrap="nowrap" px="2rem" justifyContent="space-between" >
          <Box as="p"  color="gray" px="0.5rem">Features</Box>  
          <Box as="p" color="gray" px="0.5rem">Pricing</Box>  
          <Box as="p" color="gray" px="0.5rem">Resources</Box>  
        </Flex>

        <Flex ml="auto" >
        <Button borderRadius={32} px="2rem"  fontFamily="Poppins" fontWeight={800}  border="none" >Login</Button>
        <Button borderRadius={32} px="2rem" fontFamily="Poppins"  fontWeight={600} bg="cyan" border="none">Signup</Button>

        </Flex >
        </Flex>
        </Container>
    )
}