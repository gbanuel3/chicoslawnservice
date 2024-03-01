import React, { useState } from 'react'
import {
  Flex,
  IconButton,
  Image,
  useBreakpointValue,
  Box,
  Spacer,
} from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { NAVBAR_COLOR } from '@/constants'

const images = [
  '/image.jpg',
  '/image2.jpg',
  '/image3.jpeg',
  // Add more images as needed
]

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  // Using useBreakpointValue to adjust sizes and spacing responsively
  const imageSize = useBreakpointValue({ base: '75%', md: '100%' })
  const marginAround = useBreakpointValue({ base: '1', md: '2' })
  const maxImageSize = useBreakpointValue({ base: 'auto', lg: '1000px' })
  const marginTop = useBreakpointValue({ base: '7vh', md: '15vh' })
  const marginBottom = useBreakpointValue({ base: '5vh', md: '15vh' })

  const handlePrev = () =>
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  const handleNext = () =>
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))

  return (
    <Box
      bg={NAVBAR_COLOR}
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width={imageSize}
        marginTop={marginTop}
        marginBottom={marginBottom}
      >
        <Flex justifyContent="center" alignItems="center" width="100%">
          <IconButton
            aria-label="Previous image"
            icon={<ArrowBackIcon />}
            onClick={handlePrev}
            size={'md'}
            variant="ghost"
            color="white"
            bg="gray"
            isRound={true}
            m={marginAround}
          />
          <Image
            src={images[currentSlide]}
            alt="Slideshow image"
            boxSize="auto"
            objectFit="cover"
            maxW={maxImageSize}
            maxH={maxImageSize}
          />
          <IconButton
            aria-label="Next image"
            icon={<ArrowForwardIcon />}
            onClick={handleNext}
            size={'md'}
            variant="ghost"
            color="white"
            bg="gray"
            isRound={true}
            m={marginAround}
          />
        </Flex>
      </Flex>
    </Box>
  )
}

export default Slideshow
