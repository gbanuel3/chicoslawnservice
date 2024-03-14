import React from 'react'
import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react'

function Biography() {
  // Adjusting image size dynamically
  const imageSize = useBreakpointValue({ base: '150px', md: '225px', lg: '300px' })
  // Adjusting text size dynamically
  const textSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' })
  // Adjusting the maximum width of the text container dynamically
  const textMaxWidth = useBreakpointValue({ base: '100%', md: '600px', lg: '800px' })

  return (
    <Box p={5} bg="black" color="white" width={'100%'}>
      <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">
        Serving since 1995...
      </Text>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justifyContent="center" // Center the content in the Flex container
        gap={4} // Adds a gap between items
      >
        <Box textAlign="center">
          <Image
            src="/park.webp"
            alt="Landscaping Image"
            borderRadius="md"
            m="auto" // Center the image within the Box
            boxSize={imageSize} // Use the dynamic image size
          />
        </Box>
        <Text
          fontSize={textSize} // Use the dynamic text size
          maxWidth={textMaxWidth} // Use the dynamic max width for the text container
          textAlign={{ base: 'center', md: 'left' }}
        >
          For 29 years, our landscaping business has been transforming the Chicagoland
          area, bringing life and beauty to outdoor spaces. Specializing in custom
          landscaping solutions, we blend local plant knowledge with sustainable
          practices to enhance homes and businesses alike. Our dedication to quality and
          community has built lasting relationships, making us a trusted partner in
          outdoor design and care.
        </Text>
      </Flex>
    </Box>
  )
}

export default Biography
