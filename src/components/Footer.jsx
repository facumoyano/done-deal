import { Box, Container, Image, Stack, Text, UnorderedList, ListItem } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBuilding, faClipboardList, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import ImgFooter from '../assets/footer.jpg'
import LogoFooter from '../assets/logo-footer.png'


const Footer = () => {
  return (
    <Box as='footer' backgroundImage={ImgFooter} width='100%'>
        <Container maxW='1200px' margin='0 auto'>
          <Stack flexDirection='row' justifyContent='space-between' py={10}>
            <Box display='flex' flexDirection='column' gap={5}> 
              <Image src={LogoFooter} alt='logo done deal' width='10rem' />
              
                <Text color='color.blanco'>
                <Text as='span' fontWeight='700' color='color.blanco'>
                  E-mail:
                </Text> asdasda@asdasd.com
                </Text>

                <Text color='color.blanco'>
                <Text as='span' fontWeight='700' color='color.blanco'>
                  Tel:
                </Text> +23484238789
                </Text>
              
            </Box>
            <Box pt={10}>
            <UnorderedList
                        display="flex"
                        flexDirection="row"
                        gap={6}
                        listStyleType="none"
                        color="color.blanco"
                        fontWeight="400"
                        fontSize="lg"
                    >
                        <ListItem
                            _hover={{
                                color: "color.terciario",
                                transition: "color .3s ease",
                            }}
                        >
                            <Link to="/"><FontAwesomeIcon icon={faHome} /> Inicio</Link>
                        </ListItem>
                        <ListItem
                            _hover={{
                                color: "color.terciario",
                                transition: "color .3s ease",
                            }}
                        >
                            <Link to="/about"><FontAwesomeIcon icon={faBuilding} /> Empresa</Link>
                        </ListItem>
                        <ListItem
                            _hover={{
                                color: "color.terciario",
                                transition: "color .3s ease",
                            }}
                        >
                            <Link to="/services"><FontAwesomeIcon icon={faClipboardList} /> Servicios</Link>
                        </ListItem>
                        <ListItem
                            _hover={{
                                color: "color.terciario",
                                transition: "color .3s ease",
                            }}
                        >
                            <Link to="/contact"><FontAwesomeIcon icon={faAddressBook} /> Contacto</Link>
                        </ListItem>
                    </UnorderedList>
            </Box>
          </Stack>
            <Text color='color.blanco' textAlign='center' pt={5}>
                Todos los derechos reservados <Text as='span' fontWeight='700'>© DONE DEAL SHIPPING BROKERS</Text>
            </Text>
        </Container>
    </Box>
  )
}

export default Footer