import { Box, Grid, Heading } from "@chakra-ui/react";
import ServicesAccordion from "./ServicesAccordion";
import { useTranslation } from "react-i18next";

const ServicesItems = () => {
    const { t } = useTranslation();

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
                {t("services.titulo")}
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
