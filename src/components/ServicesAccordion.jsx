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
import { useTranslation } from "react-i18next";

const ServicesAccordion = () => {
    const { t } = useTranslation();

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
                                {t("services.logisticos")}
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
                                            {t("services.importacion")}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel fontWeight="700">
                                    <UnorderedList fontWeight={"700"}>
                                        <ListItem>
                                            {t("services.aereo")}
                                        </ListItem>
                                        <ListItem>
                                            {t("services.maritimo")}
                                        </ListItem>
                                        <ListItem>
                                            {t("services.terrestre")}
                                        </ListItem>
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
                                            {t("services.exportacion")}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel fontWeight="700">
                                    <UnorderedList fontWeight={"700"}>
                                        <ListItem>
                                            {t("services.aereo")}
                                        </ListItem>
                                        <ListItem>
                                            {t("services.maritimo")}
                                        </ListItem>
                                        <ListItem>
                                            {t("services.terrestre")}
                                        </ListItem>
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
                                {t("services.comerciales")}
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
                                            {t("services.internacionalizacion")}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel fontWeight="700">
                                    {t("services.texto1")}
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
                                            {t("services.desarrollo")}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel fontWeight="700">
                                    {t("services.texto2")}
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
