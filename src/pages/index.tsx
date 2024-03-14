import React from 'react'
import { VStack } from '@chakra-ui/react'
import Slideshow from '@/components/slideshow'
import Services from '@/components/services'

function Index() {
  return (
    <>
      <VStack spacing={0}>
        <Slideshow></Slideshow>
        <Services></Services>
      </VStack>
    </>
  )
}

export default Index
