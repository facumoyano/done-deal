import React from "react";
import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import ImgHeader from "../assets/header.jpg";
import Logo from "../assets/logo.png"
import 'animate.css';


const Header = () => {
    return (
        <Box
            as="header"
            backgroundImage={`linear-gradient(to bottom, rgb(0 0 0 / .4), rgb(0 0 0 / .6)), url(${ImgHeader})`}
            backgroundPosition="top"
            height="88vh"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"  
        >
            <Stack pt='5rem' justifyContent="center" maxWidth="600px" margin='0 auto' gap="1rem" className="animate__animated animate__zoomIn" >
                {/* <Heading as='h1' size='4xl' color='color.blanco' textTransform='uppercase' textAlign='center' fontWeight='900' >
                    Done deal shipping broker
                </Heading> */}
                <Box>
                    <Image src={Logo} alt='Done deal shipping broker' width='80%' margin='0 auto' objectFit='cover' />
                </Box>
                <Text fontSize='2xl' color='color.blanco' textAlign='center'>
                Sabemos de logística
                </Text>
                <Stack >
                    <Button backgroundColor='color.primario' color='color.blanco' width='50%' margin='0 auto' fontSize='large' _hover={{
                        backgroundColor: 'color.terciario'
                    }}>
                        Contáctanos
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Header;
