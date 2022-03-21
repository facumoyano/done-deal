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
        <Box as="main" maxWidth="1200px" margin="0 auto" my="5rem">
            <Stack flexDirection="column" gap="6rem">
                <Grid
                    templateColumns="1fr 1fr"
                    gap={20}
                    alignItems="center"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                    <Image
                        src={Img1}
                        alt="img"
                        width="100%"
                        height="80%"
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
                    </Stack>
                </Grid>

                <Grid
                    templateColumns="1fr 1fr"
                    gap={20}
                    alignItems="center"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    <Stack flexDirection="column">
                        <Heading as="h3" color="color.primario">
                            Visión
                        </Heading>
                        <hr />

                        <Text>
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
                    </Stack>
                    <Image
                        src={Img2}
                        alt="img"
                        width="100%"
                        height="80%"
                        objectFit="cover"
                        shadow="dark-lg"
                    />
                </Grid>

                <Grid
                    templateColumns="1fr 1fr"
                    gap={20}
                    alignItems="center"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                    <Image
                        src={Img3}
                        alt="img"
                        width="100%"
                        height="80%"
                        objectFit="cover"
                        shadow="dark-lg"
                    />
                    <Stack flexDirection="column">
                        <Heading as="h3" color="color.primario">
                            Valores
                        </Heading>
                        <hr />

                        <Text>
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
                    </Stack>
                </Grid>
            </Stack>
        </Box>
    );
};

export default AboutSectionPage;
