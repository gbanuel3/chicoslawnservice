import React from 'react'
import { Grid, Box, Text, Button, VStack, Image, Spacer } from '@chakra-ui/react'
import {
  HamburgerIcon,
  DragHandleIcon,
  TriangleUpIcon,
  PlusSquareIcon,
} from '@chakra-ui/icons'
import { useBreakpointValue } from '@chakra-ui/react'
import { EMAIL } from '@/constants'

function Services() {
  const serviceData = [
    {
      title: 'Planting and Gardening',
      description:
        'Plant a wide range of shrubs, tree, and flowers. Make your vision a reality.',
      imageSrc: DragHandleIcon,
    },
    {
      title: 'Mulching and Fertilizing',
      description: 'Mulch and fertilize your garden to keep it healthy and vibrant.',
      imageSrc: HamburgerIcon,
    },
    ,
    {
      title: 'Outdoor Clean Ups',
      description:
        'We offer services including but not limited to pruning, trimming, edging, and weeding.',
      imageSrc: TriangleUpIcon,
    },
    {
      title: 'Construction',
      description:
        'Build a custom deck, patio, or driveway. We offer designs for various needs and budgets.',
      imageSrc: PlusSquareIcon,
    },
  ]
  const sideMargin = 8
  const dynamicPadding = useBreakpointValue({ base: 4, md: 5 });
  return (
    <Box backgroundColor="black" color="white" paddingY="50px">
      <VStack spacing={8}>
        <Text fontSize="4xl" fontWeight="bold">
          Our Services
        </Text>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }}
          gap={3}
          marginLeft={sideMargin}
          marginRight={sideMargin}
        >
          {serviceData.map((service, index) => (
            <VStack
              key={index}
              padding={dynamicPadding}
              backgroundColor="gray.900"
              borderRadius="md"
            >
              {service && (
                <>
                  <service.imageSrc boxSize={'50px'} />
                  <Spacer />
                  <Spacer />
                  <Text fontSize="xl" fontWeight="semibold" textAlign={'center'}>
                    {service.title}
                  </Text>
                  <Text fontSize={'large'} textAlign={'center'}>
                    {service.description}
                  </Text>
                </>
              )}
            </VStack>
          ))}
        </Grid>
        <Button
          as="a"
          href={`mailto:${EMAIL}`}
          colorScheme="teal"
          variant="outline"
          color="white"
        >
          Get In Touch
        </Button>
      </VStack>
    </Box>
  )
}

export default Services
