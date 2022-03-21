import { Box, Heading, Stack, Text } from '@chakra-ui/react'

import ImgHeader from '../assets/header2.jpg'


const HeaderServices = () => {
  return (
    <Box as='header'  backgroundImage={`linear-gradient(to bottom, rgb(0 0 0 / .2), rgb(0 0 0 / .1)), url(${ImgHeader})`}
    backgroundPosition="top" 
    backgroundRepeat="no-repeat"
    backgroundSize="cover" width='100%'>
      <Box bg='rgba(255,255,255, 0.85)' marginLeft='5rem' width='40%' color='color.negro'>
        <Heading as='h1' color='color.primario' textAlign='center' pt={8}>
          Servicios
        </Heading>
        <Stack flexDirection='column' gap={5} fontWeight='700' maxWidth='1200px' margin='0 auto' p={10}>
            <Text >Poseemos la infraestructura necesaria para brindar a nuestros clientes el servicio logístico integral a sus operaciones.</Text>
            <Text>Contando con un equipo de agentes en todo el mundo trabajando de la forma más eficiente, optimizamos el transporte internacional aéreo, marítimo, terrestre y multimodal de la forma más conveniente para nuestros clientes.</Text>
            <Text>Así como también, cuando la operación lo requiere, proponemos los servicios logísticos conexos adecuados como ser, depósito en plaza, en zonas francas, en puerto, así como también, despachos aduanales, distribución nacional y el asesoramiento logístico necesario en cualquier situación operativa.</Text>
        </Stack>
      </Box>
      </Box>
  )
}

export default HeaderServices