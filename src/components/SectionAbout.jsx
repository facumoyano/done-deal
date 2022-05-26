import { useEffect } from "react";
import { Box, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import ImgWelcome from "../assets/welcome.png";
import ImgVessel from "../assets/vessel.png";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionAbout = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

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
                            bienvenidos
                        </Heading>
                    </Stack>
                    <Box data-aos="fade-up">
                        <Text mt={5}>
                            Nuestra empresa trabaja en el mercado de comercio
                            internacional brindando un mix de servicios en pos
                            de que nuestros clientes y proveedores nos
                            reconozcan como sinónimo de confianza, flexibilidad
                            y eficiencia. Nos enfocamos en la necesidad de cada
                            uno de nuestros clientes entendiendo la
                            particularidad de su negocio.
                        </Text>
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
                        <Text mt={5}>
                            Somos una nueva empresa con una basta experiencia de
                            nuestro equipo. Brindamos soluciones logísticas a
                            medida de las necesidades de nuestros clientes tanto
                            para la importación como exportacion. Nuestro mix de
                            servicios aéreos, marítimos y carreteros nos permite
                            brindar una solución logística transversal, tanto
                            operativa, administrativa y comercial . Además
                            brindamos el servicio de desarrollo de mercado para
                            agroalimentos para en estados unidos y europa.
                        </Text>
                    </Box>
                </Stack>
            </Grid>
        </Box>
    );
};

export default SectionAbout;
