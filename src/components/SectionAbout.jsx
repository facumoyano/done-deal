import { useEffect } from "react";
import { Box, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import ImgWelcome from "../assets/welcome.png";
import ImgVessel from "../assets/vessel.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const SectionAbout = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const { t } = useTranslation();

    return (
        <Box as="main" maxWidth="1200px" margin="0 auto" p={4}>
            <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                my="5rem"
                gap="5rem"
                color="color.gris"
            >
                <Stack flexDirection="column">
                    <Stack
                        flexDirection="row"
                        gap={5}
                        alignItems="center"
                        data-aos="fade-up"
                    >
                        <Image
                            src={ImgWelcome}
                            alt="imagen bienvenida"
                            width="4rem"
                            objectFit="cover"
                        />
                        <Heading
                            as="h3"
                            fontSize="2xl"
                            textTransform="uppercase"
                            data-aos="fade-up"
                        >
                            {t("aboutHome.bienvenido")}
                        </Heading>
                    </Stack>
                    <Box data-aos="fade-up">
                        <Text mt={5}>{t("aboutHome.texto")}</Text>
                    </Box>
                </Stack>

                <Stack flexDirection="column">
                    <Stack
                        flexDirection="row"
                        gap={5}
                        alignItems="center"
                        data-aos="fade-up"
                    >
                        <Image
                            src={ImgVessel}
                            alt="imagen bienvenida"
                            width="4rem"
                            objectFit="cover"
                        />
                        <Heading
                            as="h3"
                            fontSize="2xl"
                            textTransform="uppercase"
                        >
                            done deal shipping brokers
                        </Heading>
                    </Stack>
                    <Box data-aos="fade-up">
                        <Text mt={5}>{t("aboutHome.textoDos")}</Text>
                    </Box>
                </Stack>
            </Grid>
        </Box>
    );
};

export default SectionAbout;
