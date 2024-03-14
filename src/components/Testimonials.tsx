import React from 'react'
import { Box, VStack, Text, Center, useBreakpointValue } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { NAVBAR_COLOR } from '@/constants'

// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

const testimonials = [
  {
    quote:
      'The team made sure our house was built according to our budget and standards. We love the new look!',
    author: 'Emmett Marsh',
  },
  {
    quote:
      'Fantastic work! Our garden has never looked better. The attention to detail was truly beyond our expectations.',
    author: 'Lila Hartley',
  },
  {
    quote: 'Professional, punctual, and thorough: we cannot recommend them enough!',
    author: 'Mason York',
  },
  // Add more fake testimonials as needed
]

function Testimonials() {
  const maxWidth = useBreakpointValue({ base: '90%', md: '80%', lg: '70%' })
  const swiperMaxWidth = useBreakpointValue({
    base: '100vw',
    md: '100vw',
    lg: '100vw',
    xl: '100vw',
  })

  return (
    <Box
      bg={NAVBAR_COLOR}
      color="white"
      pt={'50px'}
      pb={'50px'}
      textAlign="center"
      width="full"
      maxWidth={swiperMaxWidth}
      height="auto"
      overflow="hidden"
    >
      <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mb={8}>
        What Our Clients Say
      </Text>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        loop={true}
        style={{ maxWidth: maxWidth, margin: 'auto' }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <VStack spacing={4}>
              <Text fontSize={{ base: 'md', md: 'lg' }} fontStyle="italic">
                {testimonial.quote}
              </Text>
              <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="bold">
                {testimonial.author}
              </Text>
            </VStack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default Testimonials
