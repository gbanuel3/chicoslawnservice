import React from 'react'
import { VStack } from '@chakra-ui/react'
import Slideshow from '@/components/slideshow'
import Services from '@/components/services'
import Projects from '@/components/projects'
import Biography from '@/components/biography'
import Testimonials from '@/components/Testimonials'

function Index() {
  return (
    <>
      <VStack spacing={0}>
        <Slideshow></Slideshow>
        <Services></Services>
        <Projects></Projects>
        <Biography></Biography>
        <Testimonials></Testimonials>
      </VStack>
    </>
  )
}

export default Index
