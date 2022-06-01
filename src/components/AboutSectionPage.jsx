import { useEffect } from "react";
import { Box, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Img1 from "../assets/about1.jpg";
import Img2 from "../assets/about2.jpg";
import Img3 from "../assets/about3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const AboutSectionPage = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const { t } = useTranslation();

    return (
        <Box as="main" maxWidth="1200px" margin="0 auto" my="5rem" p={5}>
            <Stack flexDirection="column" gap="6rem">
                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={20}
                    alignItems="center"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                    <Image
                        src={Img1}
                        alt="img"
                        width="100%"
                        height={{ base: "60%", md: "100%" }}
                        objectFit="cover"
                        shadow="dark-lg"
                    />
                    <Stack flexDirection="column">
                        <Heading
                            as="h3"
                            color="color.primario"
                            variant="underline"
                        >
                            {t("sectionAbout.calidad")}
                        </Heading>
                        <hr />

                        <Text>{t("sectionAbout.texto1")}</Text>
                    </Stack>
                </Grid>

                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={20}
                    alignItems="center"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    <Stack flexDirection="column" gridRow={{ md: "1" }}>
                        <Heading as="h3" color="color.primario">
                            {t("sectionAbout.vision")}
                        </Heading>
                        <hr />

                        <Text>{t("sectionAbout.texto2")}</Text>
                    </Stack>
                    <Image
                        src={Img2}
                        alt="img"
                        width="100%"
                        height={{ base: "60%", md: "100%" }}
                        objectFit="cover"
                        shadow="dark-lg"
                        gridRow={{ base: "1" }}
                    />
                </Grid>

                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={20}
                    alignItems="center"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                    <Image
                        src={Img3}
                        alt="img"
                        width="100%"
                        height={{ base: "60%", md: "100%" }}
                        objectFit="cover"
                        shadow="dark-lg"
                    />
                    <Stack flexDirection="column">
                        <Heading as="h3" color="color.primario">
                            {t("sectionAbout.mision")}
                        </Heading>
                        <hr />

                        <Text>{t("sectionAbout.texto3")}</Text>
                    </Stack>
                </Grid>
            </Stack>
        </Box>
    );
};

export default AboutSectionPage;
