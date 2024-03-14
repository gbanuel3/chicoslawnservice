import {
  Flex,
  IconButton,
  Box,
  Text,
  useBreakpointValue,
  VStack,
  Image,
} from '@chakra-ui/react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const images = [
  { src: '/image.jpg', title: 'PASSIVE HOUSE' },
  { src: '/image2.jpg', title: 'SLAT ROOF' },
  { src: '/image3.jpeg', title: 'STUDIO SHED' },
  { src: '/image.jpg', title: 'PASSIV HOUSE' },
  { src: '/image2.jpg', title: 'SLA ROOF' },
  { src: '/image3.jpeg', title: 'STUDI SHED' },
  { src: '/image.jpg', title: 'PASSIVE HOUSE' },
  { src: '/image2.jpg', title: 'SLAT ROOF' },
  { src: '/image3.jpeg', title: 'STUDIO SHED' },
  // Add more images and titles as needed
]

const Projects = () => {
    const slidesPerView = useBreakpointValue({ base: 1, md: 2, lg: 3 });
    
    // Adjusting maximum height and width for smaller screens
    const swiperMaxHeight = useBreakpointValue({ base: '250px', md: '500px' });
    const swiperMaxWidth = useBreakpointValue({ base: '100vw', md: '80vw', lg: '60vw', xl: '1280px' });
    const imageHeight = useBreakpointValue({ base: '200px', md: '250px', lg: '400px' });
  
    return (
      <Flex
        direction="column"
        align="center"
        justify="center"
        width="full"
        bg='white'
      >
        <VStack spacing={{ base: 4, md: 8 }} width="full" maxW="1280px" mt={{base: '20px', md: '40px'}} mb={{base: '20px', md: '40px'}}>
          <Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" textAlign="center" color='black'>
            Our Projects
          </Text>
          <Box width="full" maxWidth={swiperMaxWidth} height="auto" overflow="hidden" p={'10px'}>
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={slidesPerView}
              navigation={true}
              loop={true}
              style={{ maxHeight: swiperMaxHeight }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Box position="relative" width="full" height="full">
                    <Image
                      src={image.src}
                      alt={image.title}
                      objectFit="cover"
                      width="full"
                      height={imageHeight}
                    />
                    <Text
                      position="absolute"
                      bottom="0"
                      width="full"
                      textAlign="center"
                      bgColor="rgba(0, 0, 0, 0.85)"
                      color="white"
                      p={2}
                    >
                      {image.title}
                    </Text>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </VStack>
      </Flex>
    );
  };
  
  export default Projects;