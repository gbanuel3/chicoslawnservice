import React from 'react'
import { VStack } from '@chakra-ui/react'
import Slideshow from '@/components/slideshow'
import Services from '@/components/services'
import Projects from '@/components/projects'

function Index() {
  return (
    <>
      <VStack spacing={0}>
        <Slideshow></Slideshow>
        <Services></Services>
        <Projects></Projects>
      </VStack>
    </>
  )
}

export default Index
