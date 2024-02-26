import React from 'react'
import Text from '@/components/text'
import VStack from '@/components/vstack'

function About() {
  return (
    <>
      <VStack>
        <Text size="32px" weight="bold">
          About Us
        </Text>
        <Text size="18px">
          This is our About page. Here you can add information about your project, your
          team, or any other details you wish to share!
        </Text>
      </VStack>
    </>
  )
}

export default About
