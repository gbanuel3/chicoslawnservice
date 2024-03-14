import {
  Flex,
  IconButton,
  Box,
  Text,
  useBreakpointValue,
  VStack,
  Image,
  Center
} from '@chakra-ui/react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { NAVBAR_COLOR } from '@/constants'
import 'swiper/css'
import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const images = [
  '/flowers.webp',
  '/cleanup.webp',
  '/garden.webp'
  // Add more images as needed
]

function Slideshow() {
  const maxImageWidth = useBreakpointValue({ base: '250px', md: '60vw', lg: '65vw'}); // Adjusting for responsiveness
  const maxImageHeight = useBreakpointValue({ base: '250px', md: '60vh', lg: '60vh'}); // Adjusting for responsiveness
  const centerHeight = useBreakpointValue({
    base: '40vh', // shorter on smaller screens
    md: '110vh',   // taller on medium screens
    lg: '75vh',   // even taller on large screens
  });

  const bottomPadding = useBreakpointValue({ base: '0', md: '0' }); // More padding on smaller screens
  const topPadding = useBreakpointValue({ base: '0', md: '16' }); // More padding on smaller screens
  return (
    <Flex
    direction="column"
    align="center"
    justify="center"
    width="full"
    bg='white'
  >
    <Center width="100vw" height={centerHeight} bg={NAVBAR_COLOR} pb={bottomPadding} pt={topPadding}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        style={{ width: '100%', height: '100%' }} // Ensure Swiper fills the container
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <VStack
              width="full"
              height="full"
              justify="center"
              align="center"
            >
              <Image
                src={src}
                alt={`Slide ${index}`}
                maxWidth={maxImageWidth}
                maxHeight={maxImageHeight}
                objectFit="cover" // Ensure the image fits within its constraints without losing aspect ratio
              />
            </VStack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Center>
  </Flex>
  );
}

export default Slideshow;
