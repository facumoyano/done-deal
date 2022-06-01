import {
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    Stack,
    Textarea,
    Text,
    Box,
} from "@chakra-ui/react";
import { useState } from "react";
import Alerta from "./Alerta";
import emailjs from "@emailjs/browser";
import MensajeEnviado from "./MensajeEnviado";
import { useTranslation } from "react-i18next";

const Form = () => {
    const { t } = useTranslation();

    const emailRegex =
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    const [alerta, setAlerta] = useState(false);
    const [alertaEmail, setAlertaEmail] = useState(false);
    const [mensajeEnviado, setMensajeEnviado] = useState(false);

    const [cliente, setCliente] = useState({
        nombre: "",
        email: "",
        asunto: "",
        telefono: "",
        mensaje: "",
    });

    const handleInputChange = (e) => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, email, asunto, mensaje].includes("")) {
            setAlerta(true);
            return;
        }
        if (emailRegex.test(email)) {
            setAlertaEmail(false);
        } else {
            setAlertaEmail(true);
            return;
        }
        emailjs
            .sendForm(
                "service_djnsqti",
                "template_r5wib1s",
                e.target,
                "user_y7fXfXr2uyhcEppelTqsy"
            )
            .then(
                (result) => {
                    setMensajeEnviado(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        setAlertaEmail(false);
        setAlerta(false);
        setCliente({
            nombre: "",
            email: "",
            asunto: "",
            telefono: "",
            mensaje: "",
        });
    };

    const { nombre, email, asunto, telefono, mensaje } = cliente;

    return (
        <FormControl as="form" my={16} p={5} onSubmit={handleSubmit}>
            <Heading as="h3" textAlign="center" color="color.primario">
                {t("contacto.titulo")}
            </Heading>

            {alertaEmail && <Alerta msg="Email no válido" />}
            {mensajeEnviado && <MensajeEnviado />}
            <Stack
                flexDirection={{ base: "column", md: "row" }}
                justifyContent="space-between"
                mt={14}
                gap={5}
            >
                <Stack width={{ base: "100%", md: "40%" }}>
                    <FormLabel
                        htmlFor="nombre"
                        fontWeight="700"
                        display="flex"
                        flexDirection="row"
                        gap={2}
                    >
                        {t("contacto.nombre")} <Text color="red">*</Text>
                    </FormLabel>
                    <Input
                        id="nombre"
                        type="text"
                        variant="flushed"
                        borderBottom="1px"
                        borderColor="color.primario"
                        placeholder={t("contacto.nombrefield")}
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </Stack>

                <Stack width={{ base: "100%", md: "40%" }}>
                    <FormLabel
                        htmlFor="email"
                        fontWeight="700"
                        display="flex"
                        flexDirection="row"
                        gap={2}
                    >
                        E-mail: <Text color="red">*</Text>
                    </FormLabel>
                    <Input
                        id="email"
                        type="email"
                        variant="flushed"
                        borderBottom="1px"
                        borderColor="color.primario"
                        placeholder={t("contacto.emailfield")}
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </Stack>
            </Stack>

            <Stack
                flexDirection={{ base: "column", md: "row" }}
                gap={5}
                justifyContent="space-between"
                my={10}
            >
                <Stack width={{ base: "100%", md: "40%" }}>
                    <FormLabel
                        htmlFor="asunto"
                        fontWeight="700"
                        display="flex"
                        flexDirection="row"
                        gap={2}
                    >
                        {t("contacto.asunto")} <Text color="red">*</Text>
                    </FormLabel>
                    <Input
                        id="asunto"
                        type="text"
                        variant="flushed"
                        borderBottom="1px"
                        borderColor="color.primario"
                        placeholder={t("contacto.asuntofield")}
                        name="asunto"
                        value={asunto}
                        onChange={handleInputChange}
                    />
                </Stack>

                <Stack width={{ base: "100%", md: "40%" }}>
                    <FormLabel htmlFor="email" fontWeight="700">
                        {t("contacto.telefono")}{" "}
                    </FormLabel>
                    <Input
                        id="telefono"
                        type="number"
                        variant="flushed"
                        borderBottom="1px"
                        borderColor="color.primario"
                        placeholder={t("contacto.telefonofield")}
                        name="telefono"
                        value={telefono}
                        onChange={handleInputChange}
                    />
                </Stack>
            </Stack>

            <Stack>
                <FormLabel
                    htmlFor="email"
                    fontWeight="700"
                    display="flex"
                    flexDirection="row"
                    gap={2}
                >
                    {t("contacto.mensaje")} <Text color="red"> *</Text>
                </FormLabel>
                <Textarea
                    id="mensaje"
                    type="text"
                    variant="flushed"
                    borderBottom="1px"
                    borderColor="color.primario"
                    placeholder={t("contacto.mensajefield")}
                    name="mensaje"
                    value={mensaje}
                    onChange={handleInputChange}
                />
            </Stack>

            <FormHelperText textAlign="right" pt={8}>
                {t("contacto.campos")}
            </FormHelperText>
            {alerta ? <Alerta msg={t("contacto.requeridos")} /> : null}
            <Box display="flex" justifyContent="center">
                <Input
                    type="submit"
                    value={t("contacto.enviar")}
                    fontWeight="700"
                    backgroundColor="color.primario"
                    color="color.blanco"
                    border="none"
                    textTransform="uppercase"
                    width={{ base: "100%", md: "50%" }}
                    height="3.3rem"
                    cursor="pointer"
                    my={10}
                    _hover={{ bg: "color.terciario" }}
                />
            </Box>
        </FormControl>
    );
};

export default Form;
