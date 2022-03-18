import { Box, Container, Text } from "@chakra-ui/react"
import ImgFooter from '../assets/footer.jpg'


const Footer = () => {
  return (
    <Box as='footer' backgroundImage={ImgFooter} width='100%'>
        <Container maxW='1200px' margin='0 auto'>
            <Text color='color.blanco' textAlign='center'>
                Todos los derechos reservados <Text as='span' fontWeight='700'>© DONE DEAL SHIPPING BROKERS</Text>
            </Text>
        </Container>
    </Box>
  )
}

export default Footer