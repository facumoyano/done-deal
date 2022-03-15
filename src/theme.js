import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        color: {
            primario: '#282974',
            secundario: '#5F56A9',
            terciario: '#00C89A',
            blanco: '#F4ECFF'
        }
    },
    fonts: {
        heading: 'Roboto, sans-serif',
        body: 'Roboto, sans-serif'
    }
})

export default theme