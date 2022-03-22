import React from "react";
import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import ImgHeader from "../assets/header.jpg";
import Logo from "../assets/logo.png";
import "animate.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Box
            as="header"
            backgroundImage={`linear-gradient(to bottom, rgb(0 0 0 / .4), rgb(0 0 0 / .6)), url(${ImgHeader})`}
            backgroundPosition="top"
            height="88vh"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            marginTop={{ base: "4rem", md: "5rem" }}
            width="100%"
        >
            <Stack
                pt="5rem"
                justifyContent="center"
                maxWidth="600px"
                margin="0 auto"
                gap="1rem"
                className="animate__animated animate__zoomIn"
            >
                <Box>
                    <Image
                        src={Logo}
                        alt="Done deal shipping broker"
                        width="80%"
                        margin="0 auto"
                        objectFit="cover"
                    />
                </Box>
                <Text
                    fontSize="2xl"
                    color="color.blanco"
                    textAlign="center"
                    fontWeight="700"
                >
                    Sabemos de logística
                </Text>
                <Stack>
                    <Button
                        backgroundColor="color.primario"
                        color="color.blanco"
                        width="50%"
                        margin="0 auto"
                        fontSize="large"
                        _hover={{
                            backgroundColor: "color.terciario",
                        }}
                    >
                        <Link to="contact">Contáctanos</Link>
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Header;
