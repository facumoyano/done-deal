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

const Form = () => {
    return (
        <FormControl as="form" my={16}>
            <Heading as="h3" textAlign="center" color="color.primario">
                Contáctanos
            </Heading>
            <Stack flexDirection="row" justifyContent="space-between">
                <Stack width="40%">
                    <FormLabel
                        htmlFor="nombre"
                        fontWeight="700"
                        display="flex"
                        flexDirection="row"
                        gap={2}
                    >
                        Nombre: <Text color="red">*</Text>
                    </FormLabel>
                    <Input
                        id="nombre"
                        type="text"
                        variant="flushed"
                        borderBottom="1px"
                        borderColor="color.primario"
                        placeholder="Ingrese su nombre"
                    />
                </Stack>

                <Stack width="40%">
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
                        placeholder="Ingrese su email"
                    />
                </Stack>
            </Stack>

            <Stack
                flexDirection="row"
                gap={5}
                justifyContent="space-between"
                my={10}
            >
                <Stack width="40%">
                    <FormLabel
                        htmlFor="asunto"
                        fontWeight="700"
                        display="flex"
                        flexDirection="row"
                        gap={2}
                    >
                        Asunto: <Text color="red">*</Text>
                    </FormLabel>
                    <Input
                        id="asunto"
                        type="text"
                        variant="flushed"
                        borderBottom="1px"
                        borderColor="color.primario"
                        placeholder="Ingrese el asunto"
                    />
                </Stack>

                <Stack width="40%">
                    <FormLabel htmlFor="email" fontWeight="700">
                        Teléfono:{" "}
                    </FormLabel>
                    <Input
                        id="telefono"
                        type="number"
                        variant="flushed"
                        borderBottom="1px"
                        borderColor="color.primario"
                        placeholder="Ingrese su número"
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
                    Mensaje: <Text color="red"> *</Text>
                </FormLabel>
                <Textarea
                    id="mensaje"
                    type="text"
                    variant="flushed"
                    borderBottom="1px"
                    borderColor="color.primario"
                    placeholder="Ingrese un mensaje"
                />
            </Stack>

            <FormHelperText textAlign="right" pt={8}>
                * Campos obligatorios
            </FormHelperText>

            <Box display="flex" justifyContent="center">
                <Input
                    type="submit"
                    value="enviar"
                    fontWeight="700"
                    backgroundColor="color.primario"
                    color="color.blanco"
                    border="none"
                    textTransform="uppercase"
                    width="50%"
                    height="3.3rem"
                    cursor="pointer"
                    my={10}
                />
            </Box>
        </FormControl>
    );
};

export default Form;
