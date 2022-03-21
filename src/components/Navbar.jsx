import React from "react";
import { Box, Image, ListItem, Stack, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ES from "../assets/spain.png";
import EN from "../assets/united-kingdom.png";

const Navbar = () => {
    return (
        <Box
            as="nav"
            with="100%"
            boxShadow="0 0 0 2px rgba(0, 0, 0, 0.10)"
        >
            <Stack
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="1200px"
                margin="0 auto"
            >
                <Image
                    src={logo}
                    alt="logo done-deal"
                    boxSize="7rem"
                    objectFit="contain"
                />
                <Box>
                    <UnorderedList
                        display="flex"
                        flexDirection="row"
                        gap={6}
                        listStyleType="none"
                        color="color.primario"
                        fontWeight="600"
                        fontSize="lg"
                    >
                        <ListItem
                            _hover={{
                                color: "color.terciario",
                                transition: "color .3s ease",
                            }}
                        >
                            <Link to="/">Inicio</Link>
                        </ListItem>
                        <ListItem
                            _hover={{
                                color: "color.terciario",
                                transition: "color .3s ease",
                            }}
                        >
                            <Link to="/about">Empresa</Link>
                        </ListItem>
                        <ListItem
                            _hover={{
                                color: "color.terciario",
                                transition: "color .3s ease",
                            }}
                        >
                            <Link to="/services">Servicios</Link>
                        </ListItem>
                        <ListItem
                            _hover={{
                                color: "color.terciario",
                                transition: "color .3s ease",
                            }}
                        >
                            <Link to="/contact">Contacto</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/">
                                <Image
                                    src={ES}
                                    alt="spain icon"
                                    boxSize="1.5rem"
                                />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/">
                                <Image
                                    src={EN}
                                    alt="spain icon"
                                    boxSize="1.5rem"
                                />
                            </Link>
                        </ListItem>
                    </UnorderedList>
                </Box>
            </Stack>
        </Box>
    );
};

export default Navbar;
