import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    ListItem,
    UnorderedList,
} from "@chakra-ui/react";

const ServicesAccordion = () => {
    return (
        <>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton
                            backgroundColor="color.primario"
                            color="color.blanco"
                            _hover={{ bg: "color.primario" }}
                            _expanded={{
                                bg: "color.terciario",
                                color: "white",
                            }}
                            height="3.4rem"
                            borderRadius={10}
                        >
                            <Box flex="1" textAlign="left">
                                Logísticos
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton
                                        backgroundColor="color.primario"
                                        color="color.blanco"
                                        _hover={{ bg: "color.primario" }}
                                        _expanded={{
                                            bg: "color.terciario",
                                            color: "white",
                                        }}
                                        height="3.4rem"
                                        borderRadius={10}
                                    >
                                        <Box flex="1" textAlign="left">
                                            Importación
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel fontWeight="700">
                                    <UnorderedList fontWeight={"700"}>
                                        <ListItem>Aéreo</ListItem>
                                        <ListItem>Marítimo</ListItem>
                                        <ListItem>Terrestre</ListItem>
                                    </UnorderedList>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </AccordionPanel>

                    <AccordionPanel>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton
                                        backgroundColor="color.primario"
                                        color="color.blanco"
                                        _hover={{ bg: "color.primario" }}
                                        _expanded={{
                                            bg: "color.terciario",
                                            color: "white",
                                        }}
                                        height="3.4rem"
                                        borderRadius={10}
                                    >
                                        <Box flex="1" textAlign="left">
                                            Exportación
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel fontWeight="700">
                                    <UnorderedList fontWeight={"700"}>
                                        <ListItem>Aéreo</ListItem>
                                        <ListItem>Marítimo</ListItem>
                                        <ListItem>Terrestre</ListItem>
                                    </UnorderedList>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton
                            backgroundColor="color.primario"
                            color="color.blanco"
                            _hover={{ bg: "color.primario" }}
                            _expanded={{
                                bg: "color.terciario",
                                color: "white",
                            }}
                            textTransform="capitalize"
                            height="3.4rem"
                            borderRadius={10}
                        >
                            <Box flex="1" textAlign="left">
                                Comerciales
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton
                                        backgroundColor="color.primario"
                                        color="color.blanco"
                                        _hover={{ bg: "color.primario" }}
                                        _expanded={{
                                            bg: "color.terciario",
                                            color: "white",
                                        }}
                                        height="3.4rem"
                                        borderRadius={10}
                                    >
                                        <Box flex="1" textAlign="left">
                                            Internacionalización de empresas
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel fontWeight="700">
                                    - Acompañamos a tu empresa en el proceso de
                                    exportar e importar desde y hacia USA
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </AccordionPanel>
                    <AccordionPanel>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton
                                        backgroundColor="color.primario"
                                        color="color.blanco"
                                        _hover={{ bg: "color.primario" }}
                                        _expanded={{
                                            bg: "color.terciario",
                                            color: "white",
                                        }}
                                        height="3.4rem"
                                        borderRadius={10}
                                    >
                                        <Box flex="1" textAlign="left">
                                            Desarrollo de mercado
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel fontWeight="700">
                                    - Desarrollo de mercado para agroalimentos
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default ServicesAccordion;
