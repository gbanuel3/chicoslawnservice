import React from 'react';
import { Box, Flex, Link, Spacer, useMediaQuery } from '@chakra-ui/react';
import { NAVBAR_COLOR } from '@/constants';

function NavigationBar() {
  // Use the useMediaQuery hook to determine the screen size
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      bg={NAVBAR_COLOR}
      color="white"
      position="fixed"
      width="100%"
      zIndex="1000"
      padding={isLargerThan768 ? '1rem' : '0.5rem'} // Conditional padding based on screen size
    >
      <Box
        fontSize={isLargerThan768 ? '36px' : '18px'} // Conditional font size based on screen size
        fontWeight="bold"
        whiteSpace="nowrap"
        cursor="pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Chicos Lawn Service
      </Box>

      <Spacer />

      <Flex gap={isLargerThan768 ? '30px' : '10px'} paddingRight={isLargerThan768 ? '3rem' : '1rem'}>
        <Box fontSize={isLargerThan768 ? '32px' : '16px'}>
          <Link href="tel:+18479497232" textDecoration={'none'} color={'white'}>
            1-(847)-949-7232
          </Link>
        </Box>

        <Box
          as="button"
          bg="white"
          borderRadius="20px"
          _hover={{ bg: '#ededed' }}
          fontSize={isLargerThan768 ? '18px' : '8px'} // Conditional font size based on screen size
          border="0px"
          padding={isLargerThan768 ? '8px 16px' : '4px 8px'} // Conditional padding based on screen size
        >
          <Link
            href="mailto:gbanuel3@gmail.com"
            textDecoration={'none'}
            color={'black'}
          >
            Get In Touch
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
}

export default NavigationBar;