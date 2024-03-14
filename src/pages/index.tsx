import React from 'react'
import { VStack } from '@chakra-ui/react'
import Slideshow from '@/components/slideshow'
import Services from '@/components/services'
import Projects from '@/components/projects'
import Biography from '@/components/biography'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/contact'

function Index() {
  return (
    <>
      <VStack spacing={0}>
        <Slideshow></Slideshow>
        <Services></Services>
        <Projects></Projects>
        <Biography></Biography>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </VStack>
    </>
  )
}

export default Index
