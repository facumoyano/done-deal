import { Box, Button, Grid, Heading, Image, Stack } from "@chakra-ui/react";
import Logistica from "../assets/logistica.png";
import Export from "../assets/export.png";
import Asesoramiento from "../assets/asesoramiento.png";
import Import from "../assets/import.png";
import Agro from "../assets/agro.png";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServicesHome = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const { t } = useTranslation();

    return (
        <Box as="section" bg="#f5f5f5" px={4} py={10} maxWidth="100%">
            <Heading
                as="h3"
                color="color.primario"
                textAlign="center"
                data-aos="fade-up"
                fontSize={{ base: "2xl", md: "3xl" }}
            >
                {t("servicesHome.titulo")}
            </Heading>
            <Grid
                templateColumns={{ base: "1fr 1fr", md: "1fr 1fr 1fr 1fr 1fr" }}
                maxWidth="1200px"
                margin="0 auto"
                py="5rem"
                gap={10}
                data-aos="fade-up"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap={5}
                >
                    <Image src={Logistica} alt="asd" width="5rem" />
                    <Heading
                        as="h5"
                        color="color.primario"
                        fontSize={{ base: "md", md: "xl" }}
                    >
                        {t("servicesHome.logistica")}
                    </Heading>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap={8}
                >
                    <Image src={Export} alt="asd" width="5rem" />
                    <Heading
                        as="h5"
                        color="color.primario"
                        fontSize={{ base: "md", md: "xl" }}
                    >
                        {t("servicesHome.exportacion")}
                    </Heading>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap={8}
                >
                    <Image src={Import} alt="asd" width="5rem" />
                    <Heading
                        as="h5"
                        color="color.primario"
                        fontSize={{ base: "md", md: "xl" }}
                    >
                        {t("servicesHome.importacion")}
                    </Heading>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap={8}
                >
                    <Image src={Asesoramiento} alt="asd" width="5rem" />
                    <Heading
                        as="h5"
                        color="color.primario"
                        fontSize={{ base: "md", md: "xl" }}
                    >
                        {t("servicesHome.asesoramiento")}
                    </Heading>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap={8}
                >
                    <Image src={Agro} alt="asd" width="5rem" />
                    <Heading
                        as="h5"
                        color="color.primario"
                        fontSize={{ base: "md", md: "xl" }}
                    >
                        {t("servicesHome.comercial")}
                    </Heading>
                </Box>
            </Grid>
            <Stack justify="center" alignItems="center" data-aos="fade-up">
                <Button
                    variant="outline"
                    backgroundColor="color.primario"
                    color="color.blanco"
                    width={{ base: "100%", md: "30%" }}
                    border="none"
                    rightIcon={<ArrowForwardIcon />}
                    _hover={{ bg: "color.terciario" }}
                >
                    <Link to="services">{t("servicesHome.boton")}</Link>
                </Button>
            </Stack>
        </Box>
    );
};

export default ServicesHome;
