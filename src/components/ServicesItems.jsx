import { Box, Grid, Heading } from "@chakra-ui/react";
import ServicesAccordion from "./ServicesAccordion";

const ServicesItems = () => {
    return (
        <Box maxWidth="1200px" margin="0 auto" mt="5rem" mb="8rem" p={5}>
            <Heading
                as="h2"
                color="color.primario"
                fontWeight="500"
                textAlign="center"
                textTransform="uppercase"
                fontSize={{ base: "2xl", md: "3xl" }}
            >
                ofrecemos distintas soluciones
            </Heading>
            <Box
                backgroundColor="color.primario"
                height="2px"
                width="32%"
                margin="0 auto"
                mt={2}
            ></Box>

            <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                gap="2rem"
                mt={20}
            >
                <ServicesAccordion />
            </Grid>
        </Box>
    );
};

export default ServicesItems;
