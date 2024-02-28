import React, { useState } from 'react'
import { ArrowRightIcon, ArrowLeftIcon } from '@radix-ui/react-icons'
import styled from 'styled-components'
import { NAVBAR_COLOR } from '@/constants'
import { HStack } from '@chakra-ui/react'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${NAVBAR_COLOR};
  width: 100%;

`
const SlideImage = styled.img`
  max-width: 100%; // Ensure it doesn't overflow the screen width
  max-height: 50vh; // Adjust the height to maintain aspect ratio
  object-fit: cover; // Cover the area without distorting the image
`

const ArrowButton = styled.button`
  background: grey;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px; // Reduced padding
  border-radius: 50%;
  width: 50px; // Fixed width
  height: 50px; // Fixed height
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  svg {
    width: 24px; // Adjust the size of the icon if needed
    height: 24px;
  }
`;

const images = [
  '/image.jpg',
  '/image2.jpg',
  '/image3.jpeg',
  // Add as many images as you like
]

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      {/* <Container>
        <HStack>
          <ArrowButton onClick={handlePrev}>
            <ArrowLeftIcon />
          </ArrowButton>
          <SlideImage src={images[currentSlide]} alt="Slideshow image" />
          <ArrowButton onClick={handleNext}>
            <ArrowRightIcon />
          </ArrowButton>
        </HStack>
      </Container> */}
    </>
  )
}

export default Slideshow
