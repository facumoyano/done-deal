import { useEffect } from "react";
import { Box, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Img1 from "../assets/about1.jpg";
import Img2 from "../assets/about2.jpg";
import Img3 from "../assets/about3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSectionPage = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

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
                            Calidad como valor
                        </Heading>
                        <hr />

                        <Text>
                            Contamos con conocimiento en el sector con una vasta
                            experiencia en el desarrollo de comercio exterior,
                            lo que nos permite brindar servicios a nuestros
                            clientes que se adaptan a la necesidad de sus
                            productos y procesos teniendo como valor agregado
                            una gestión resolutiva y eficiente. Un equipo
                            profesional y con experiencia se adapta a lograr un
                            servicio personalizado para que nuestros clientes
                            logren eficiencia en sus procesos de
                            internacionalización.
                        </Text>
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
                            Visión
                        </Heading>
                        <hr />

                        <Text>
                            Liderar el mercado de servicios logísticos y de
                            internacionalización logrando la satisfacción de la
                            cadena clientes-clientes y clientes proveedores,
                            siendo socios estratégicos de nuestros clientes y
                            proveedores para obtener el éxito de nuestros
                            clientes y así el éxito de nuestra compañía.
                        </Text>
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
                            Misión
                        </Heading>
                        <hr />

                        <Text>
                            Somos un equipo experimentado unido para brindar
                            soluciones logísticas y de servicios en la
                            internacionalización generando valor agregado en el
                            proceso que le permitan a nuestros clientes lograr
                            eficiencia y Eficacia hacia sus clientes, en mejores
                            beneficios no solo en costos y efectividad sino en
                            un proceso ágil, controlado y de soporte constante.
                        </Text>
                    </Stack>
                </Grid>
            </Stack>
        </Box>
    );
};

export default AboutSectionPage;
