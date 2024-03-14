import React from 'react'
import {
  Box,
  Flex,
  Link,
  Spacer,
  useMediaQuery,
  useBreakpointValue,
} from '@chakra-ui/react'
import { NAVBAR_COLOR, EMAIL, PHONE_NUMBER, PHONE_NUMBER_DISPLAY } from '@/constants'

function NavigationBar() {
  // Responsive design values using useBreakpointValue
  const navPadding = useBreakpointValue({ base: '0.75rem', md: '1rem' })
  const navHeight = useBreakpointValue({ base: '80px', md: '90px' })
  const textSize = useBreakpointValue({ base: '14px', md: '36px' })
  const numberTextSize = useBreakpointValue({ base: '12px', md: '25px' })
  const flexGap = useBreakpointValue({ base: '10px', md: '26px' })
  const buttonFontSize = useBreakpointValue({ base: '8px', md: '18px' })
  const buttonPadding = useBreakpointValue({ base: '4px 8px', md: '8px 16px' })

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      bg={NAVBAR_COLOR}
      color="white"
      position="fixed"
      width="100%"
      zIndex="1000"
      padding={navPadding}
      height={navHeight}
    >
      <Box
        fontSize={textSize}
        fontWeight="bold"
        whiteSpace="nowrap"
        cursor="pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Chicos Lawn Service
      </Box>

      <Spacer />

      <Flex gap={flexGap} paddingRight={navPadding}>
        <Box fontSize={numberTextSize}>
          <Link href={`tel:+${PHONE_NUMBER}`} textDecoration={'none'} color={'white'}>
            {PHONE_NUMBER_DISPLAY}
          </Link>
        </Box>

        <Box
          as="button"
          bg="white"
          borderRadius="20px"
          _hover={{ bg: '#ededed' }}
          fontSize={buttonFontSize}
          border="0px"
          padding={buttonPadding}
        >
          <Link href={`mailto:${EMAIL}`} textDecoration={'none'} color={'black'}>
            Get In Touch
          </Link>
        </Box>
      </Flex>
    </Flex>
  )
}

export default NavigationBar
