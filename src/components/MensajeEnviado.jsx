import { Box, Text } from "@chakra-ui/react";

const MensajeEnviado = () => {
    return (
        <Box
            backgroundColor="green"
            color="color.blanco"
            textAlign="center"
            fontWeight="700"
            borderRadius="10px"
            my={4}
            py={4}
        >
            <Text>Mensaje enviado correctamente</Text>
        </Box>
    );
};

export default MensajeEnviado;
