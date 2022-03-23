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
import EN from "../assets/usa.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { t, i18n } = useTranslation();

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
                        <Link to="/" onClick={() => i18n.changeLanguage("es")}>
                            <Image src={ES} alt="spain icon" width="1.5rem" />
                        </Link>
                        <Link to="/" onClick={() => i18n.changeLanguage("en")}>
                            <Image src={EN} alt="spain icon" width="1.7rem" />
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
                                <Link to="/">{t("navbar.inicio")}</Link>
                            </ListItem>
                            <ListItem
                                _hover={{
                                    color: "color.terciario",
                                    transition: "color .3s ease",
                                }}
                            >
                                <Link to="/about">{t("navbar.empresa")}</Link>
                            </ListItem>
                            <ListItem
                                _hover={{
                                    color: "color.terciario",
                                    transition: "color .3s ease",
                                }}
                            >
                                <Link to="/services">
                                    {t("navbar.servicios")}
                                </Link>
                            </ListItem>
                            <ListItem
                                _hover={{
                                    color: "color.terciario",
                                    transition: "color .3s ease",
                                }}
                            >
                                <Link to="/contact">
                                    {t("navbar.contacto")}
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    to="/"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        i18n.changeLanguage("es");
                                    }}
                                >
                                    <Image
                                        src={ES}
                                        alt="spain icon"
                                        boxSize="1.5rem"
                                        mt="1.3px"
                                    />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    to="/"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        i18n.changeLanguage("en");
                                    }}
                                >
                                    <Image
                                        src={EN}
                                        alt="spain icon"
                                        boxSize="1.8rem"
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
                                    {t("navbar.inicio")}
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
                                    {t("navbar.empresa")}
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
                                    {t("navbar.servicios")}
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
                                    {t("navbar.contacto")}
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
