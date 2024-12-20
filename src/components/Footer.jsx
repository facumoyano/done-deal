import {
    Box,
    Container,
    Image,
    Stack,
    Text,
    UnorderedList,
    ListItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ImgFooter from "../assets/footer.jpg";
import LogoFooter from "../assets/logo-footer.png";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <Box as="footer" backgroundImage={ImgFooter} width="100%">
            <Container maxW="1200px" margin="0 auto">
                <Stack
                    flexDirection={{ base: "column", md: "row" }}
                    justifyContent={{ base: "center", md: "space-between" }}
                    py={10}
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        gap={5}
                    >
                        <Image
                            src={LogoFooter}
                            alt="logo done deal"
                            width="10rem"
                        />

                        <Text
                            color="color.blanco"
                            fontSize={{ base: "sm", md: "lg" }}
                        >
                            <Text
                                as="span"
                                fontWeight="700"
                                color="color.blanco"
                            >
                                <FontAwesomeIcon icon={faEnvelope} /> E-mail:
                            </Text>{" "}
                            commercial@donedealbrokers.com
                        </Text>

                        <Text
                            color="color.blanco"
                            fontSize={{ base: "sm", md: "lg" }}
                        >
                            <Text
                                as="span"
                                fontWeight="700"
                                color="color.blanco"
                            >
                                <FontAwesomeIcon icon={faLocationDot} />
                            </Text>{" "}
                            848 Brickell Ave, Miami, FL 33131, EE. UU.
                        </Text>
                    </Box>
                    <Box pt={10}>
                        <UnorderedList
                            display="flex"
                            flexDirection="row"
                            justifyContent="center"
                            gap={6}
                            listStyleType="none"
                            color="color.blanco"
                            fontWeight="400"
                            fontSize={{ base: "md", md: "lg" }}
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
                        </UnorderedList>
                    </Box>
                </Stack>
                <Text color="color.blanco" textAlign="center" py={5}>
                    {t("footer.derechos")}{" "}
                    <Text as="span" fontWeight="700">
                        © {new Date().getFullYear()} DONE DEAL BROKERS FS LLC 
                    </Text>
                </Text>
            </Container>
        </Box>
    );
};

export default Footer;
