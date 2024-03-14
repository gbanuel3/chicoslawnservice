import React from 'react';
import { Box, Text, VStack, Button, useBreakpointValue } from '@chakra-ui/react';
import { ADDRESS, EMAIL, PHONE_NUMBER, PHONE_NUMBER_DISPLAY } from '@/constants';

function Contact() {
  const fontSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });

  return (
    <Box bg="black" color="white" width="100%" py={{ base: '4', md: '8' }} px={{ base: '4', md: '16' }}>
      <VStack spacing={{ base: '2', md: '4' }} align="center" maxW={{ base: 'full', md: '2xl' }} m="auto">
        <Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" mb={4}>
          Contact Us
        </Text>
        <Text fontSize={fontSize} mb={2}>{ADDRESS}</Text>
        <Text as="a" href={`tel:+${PHONE_NUMBER}`} fontSize={fontSize} mb={2}>{PHONE_NUMBER_DISPLAY}</Text>
        <Text as="a" href={`mailto:${EMAIL}`} fontSize={fontSize} mb={4}>{EMAIL}</Text>
        <Button
          as="a"
          href={`mailto:${EMAIL}`}
          size={buttonSize}
          colorScheme="blue"
          variant="solid"
          boxShadow="0px 2px 2px 1px #0F0F0F"
          _hover={{
            bg: "blue.600",
          }}
        >
          Contact
        </Button>
      </VStack>
    </Box>
  );
}

export default Contact;