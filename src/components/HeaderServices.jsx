import { Box, Heading, Stack, Text } from '@chakra-ui/react'

import ImgHeader from '../assets/footer.jpg'


const HeaderServices = () => {
  return (
    <Box as='header' backgroundImage={ImgHeader} width='100%' borderTopRadius='25%'>
        <Heading as='h1' color='color.blanco' textAlign='center' marginTop='2rem' pt={8}>
          Servicios
        </Heading>
        <Stack flexDirection='column' gap={5} fontWeight='700' maxWidth='1200px' margin='0 auto' p={10}>
            <Text color='color.blanco'>Poseemos la infraestructura necesaria para brindar a nuestros clientes el servicio logístico integral a sus operaciones.</Text>
            <Text color='color.blanco'>Contando con un equipo de agentes en todo el mundo trabajando de la forma más eficiente, optimizamos el transporte internacional aéreo, marítimo, terrestre y multimodal de la forma más conveniente para nuestros clientes.</Text>
            <Text color='color.blanco'>Así como también, cuando la operación lo requiere, proponemos los servicios logísticos conexos adecuados como ser, depósito en plaza, en zonas francas, en puerto, así como también, despachos aduanales, distribución nacional y el asesoramiento logístico necesario en cualquier situación operativa.</Text>
        </Stack>
      </Box>
  )
}

export default HeaderServices