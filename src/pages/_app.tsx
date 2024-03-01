import { ComponentType } from 'react'
import NavigationBar from '@/components/navigation_bar'
import { VStack } from '@chakra-ui/react'
import GlobalStyle from '@/styles/GlobalStyle'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({
  Component,
  pageProps,
}: {
  Component: ComponentType<any>
  pageProps: any
}) {
  return (
    <>
    <ChakraProvider>
      <GlobalStyle />
      <NavigationBar />
      <VStack>
        <Component {...pageProps} />
      </VStack>
    </ChakraProvider>
    </>
  )
}

export default MyApp
