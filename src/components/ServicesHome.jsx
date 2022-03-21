import { Box, Button, Grid, Heading, Image, Stack } from '@chakra-ui/react'
import Logistica from '../assets/logistica.png'
import Export from '../assets/export.png'
import Asesoramiento from '../assets/asesoramiento.png'
import Import from '../assets/import.png'
import Agro from '../assets/agro.png'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


const ServicesHome = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Box as='section' bg='#f5f5f5' py={12}>
      <Heading as='h3' color='color.primario' textAlign='center'  data-aos="fade-up">
        Ofrecemos distintas soluciones logísticas
      </Heading>
        <Grid templateColumns='1fr 1fr 1fr 1fr 1fr' maxWidth='1200px' margin='0 auto' py='5rem' gap={10}  data-aos="fade-up">
           <Box display='flex' flexDirection='column' alignItems='center' gap={5}>
             <Image src={Logistica} alt='asd' width='5rem' />
             <Heading as='h5' color='color.primario' fontSize='xl'>
               Logística
             </Heading>
           </Box>

           <Box display='flex' flexDirection='column'  alignItems='center' gap={8}>
             <Image src={Export} alt='asd' width='5rem' />
             <Heading as='h5' color='color.primario' fontSize='xl'>
               Exportación
             </Heading>
           </Box>

           <Box display='flex' flexDirection='column'  alignItems='center' gap={8}>
             <Image src={Import} alt='asd' width='5rem' />
             <Heading as='h5' color='color.primario' fontSize='xl'>
               Importación
             </Heading>
           </Box>

           <Box display='flex' flexDirection='column'  alignItems='center' gap={8}>
             <Image src={Asesoramiento} alt='asd' width='5rem' />
             <Heading as='h5' color='color.primario' fontSize='xl'>
               Asesoramiento en internacionalización
             </Heading>
           </Box>

           <Box display='flex' flexDirection='column'  alignItems='center' gap={8}>
             <Image src={Agro} alt='asd' width='5rem' />
             <Heading as='h5' color='color.primario' fontSize='xl'>
               Comercial - Agro alimentos de diversos origenes
             </Heading>
           </Box>
        </Grid>
        <Stack justify="center" alignItems="center"  data-aos="fade-up">
          <Button variant='outline' backgroundColor='color.primario' color='color.blanco' width='20%' border='none' rightIcon={<ArrowForwardIcon />}>
            Ver más
          </Button>
        </Stack>
    </Box>
  )
}

export default ServicesHome