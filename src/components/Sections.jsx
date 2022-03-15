import { Box } from '@chakra-ui/react'
import React from 'react'
import SectionAbout from './SectionAbout'

const Sections = () => {
  return (
    <Box as='main' maxWidth='1200px' margin='0 auto'>
      <SectionAbout />
    </Box>
  )
}

export default Sections