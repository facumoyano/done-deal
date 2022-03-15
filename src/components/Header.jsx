import React from "react";
import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import ImgHeader from "../assets/header.jpg";
import ImgHeader2 from "../assets/header2.jpg";

const Header = () => {
    return (
        <Box
            as="header"
            backgroundImage={`linear-gradient(to bottom, rgb(0 0 0 / .4), rgb(0 0 0 / .6)), url(${ImgHeader})`}
            backgroundPosition="center"
            height="88vh"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"  
        >
            <Stack pt='12rem' justifyContent="center" maxWidth="800px" margin='0 auto' gap="2rem" >
                <Heading as='h1' size='4xl' color='color.blanco' textTransform='uppercase' textAlign='center' fontWeight='900' >
                    Done deal shipping broker
                </Heading>
                <Text fontSize='lg' color='color.blanco' textAlign='center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel nibh a erat rhoncus condimentum volutpat ut purus.
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
