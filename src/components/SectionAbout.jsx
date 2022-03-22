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
                            La ventaja de nuestra empresa es que comprendemos a
                            sus clientes, a sus competidores y a usted, de tal
                            manera que estamos en condiciones de ayudarle con
                            sus necesidades empresariales. Nuestra dedicación
                            hacia el servicio personalizado y nuestro amplio
                            conjunto de soluciones de logística garantiza que
                            seamos el socio estratégico perfecto de largo plazo
                            para manejar sus necesidades mundiales y locales, en
                            cada etapa del camino. Sus Necesidades , Nuestras
                            Soluciones
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
                            World Global Logistic debido a su vasta experiencia
                            en toda la cadena logística le ofrece a nuestros
                            clientes la posibilidad de usar nuestro servicio de
                            WG Project Logistics. WG Project Logistics es una
                            división de negocios internacionales donde manejamos
                            proyectos de transporte y ofrecemos servicios
                            integrales de logística para envios de carga pesada
                            y gran escala. WG Project Logistics planifica,
                            implementa y gestiona proyectos de logística
                            especializados, a cualquier escala con cobertura de
                            principio a fin.
                        </Text>
                    </Box>
                </Stack>
            </Grid>
        </Box>
    );
};

export default SectionAbout;
