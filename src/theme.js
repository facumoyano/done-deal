import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        color: {
            primario: '#282974',
            secundario: '#5F56A9',
            terciario: '#e63946',
            blanco: '#F4ECFF',
            gris: '#7C7C7C'
        }
    },
    fonts: {
        heading: 'Roboto, sans-serif',
        body: 'Roboto, sans-serif'
    }
})

export default theme