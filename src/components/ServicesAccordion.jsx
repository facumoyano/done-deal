import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from "@chakra-ui/react";
import services from "../data/services";

const ServicesAccordion = () => {
    return (
        <>
            {services.map((service) => (
                <Accordion key={service.nombre} allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton
                                backgroundColor="color.primario"
                                color="color.blanco"
                                _hover={{ bg: "color.primario" }}
                                _expanded={{ bg: "#000000", color: "white" }}
                                textTransform="capitalize"
                                height="3.4rem"
                                borderRadius={10}
                            >
                                <Box flex="1" textAlign="left">
                                    {service.nombre}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel>{service.descripcion}</AccordionPanel>
                    </AccordionItem>
                </Accordion>
            ))}
        </>
    );
};

export default ServicesAccordion;
