import { Box } from "@chakra-ui/react";

const Alerta = ({ msg }) => {
    return (
        <Box
            backgroundColor="#E40E0EDE"
            color="color.blanco"
            textAlign="center"
            py={3}
            borderRadius="10px"
            fontWeight="700"
            mt={4}
        >
            {msg}
        </Box>
    );
};

export default Alerta;
