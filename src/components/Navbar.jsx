import React from "react";
import {
    Box,
    Image,
    ListItem,
    Stack,
    UnorderedList,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    useDisclosure,
    Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faBuilding,
    faClipboardList,
    faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ES from "../assets/spain.png";
import EN from "../assets/united-kingdom.png";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                as="nav"
                position="fixed"
                top="0"
                width="100%"
                boxShadow="0 0 0 2px rgba(0, 0, 0, 0.10)"
                backgroundColor="#fff"
                zIndex="1"
            >
                <Stack
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    maxWidth={{ base: "100%", md: "1200px" }}
                    margin="0 auto"
                    p={3}
                >
                    <Image
                        src={logo}
                        alt="logo done-deal"
                        width={{ base: "7rem", md: "10rem" }}
                        objectFit="cover"
                    />
                    <Box
                        display={{ base: "flex", md: "none" }}
                        flexDirection="row"
                        gap={4}
                        alignItems="center"
                    >
                        <Link to="/">
                            <Image src={ES} alt="spain icon" width="1.4rem" />
                        </Link>
                        <Link to="/">
                            <Image src={EN} alt="spain icon" width="1.4rem" />
                        </Link>
                        <HamburgerIcon
                            color="color.primario"
                            w={8}
                            h={8}
                            onClick={onOpen}
                        />
                    </Box>
                    <Box display={{ base: "none", md: "inline-block" }}>
                        <UnorderedList
                            display="flex"
                            flexDirection="row"
                            gap={6}
                            listStyleType="none"
                            color="color.primario"
                            fontWeight="600"
                            fontSize="1.1rem"
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

            <Drawer
                onClose={onClose}
                isOpen={isOpen}
                size="full"
                display={{ md: "none" }}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <Stack
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        p={4}
                    >
                        <Image
                            src={logo}
                            width="5rem"
                            objectFit="cover"
                            alt="logo"
                        />{" "}
                        <CloseIcon h={6} w={6} onClick={onClose} />
                    </Stack>
                    <Divider />
                    <DrawerBody marginTop="3rem">
                        <UnorderedList
                            display="flex"
                            flexDirection="column"
                            alignItems="left"
                            gap={5}
                            listStyleType="none"
                            color="color.primario"
                            fontWeight="700"
                            fontSize="lg"
                        >
                            <ListItem
                                _hover={{
                                    color: "color.terciario",
                                    transition: "color .3s ease",
                                }}
                            >
                                <Link to="/" onClick={onClose}>
                                    <FontAwesomeIcon
                                        display="none"
                                        icon={faHome}
                                    />{" "}
                                    Inicio
                                </Link>
                            </ListItem>
                            <Divider />
                            <ListItem
                                _hover={{
                                    color: "color.terciario",
                                    transition: "color .3s ease",
                                }}
                            >
                                <Link to="/about" onClick={onClose}>
                                    <FontAwesomeIcon icon={faBuilding} />{" "}
                                    Empresa
                                </Link>
                            </ListItem>
                            <Divider />
                            <ListItem
                                _hover={{
                                    color: "color.terciario",
                                    transition: "color .3s ease",
                                }}
                            >
                                <Link to="/services" onClick={onClose}>
                                    <FontAwesomeIcon icon={faClipboardList} />{" "}
                                    Servicios
                                </Link>
                            </ListItem>
                            <Divider />
                            <ListItem
                                _hover={{
                                    color: "color.terciario",
                                    transition: "color .3s ease",
                                }}
                            >
                                <Link to="/contact" onClick={onClose}>
                                    <FontAwesomeIcon icon={faAddressBook} />{" "}
                                    Contacto
                                </Link>
                            </ListItem>
                            <Divider />
                        </UnorderedList>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Navbar;
