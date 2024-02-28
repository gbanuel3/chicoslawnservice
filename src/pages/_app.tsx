import { ComponentType } from 'react'
import NavigationBar from '@/components/navigation_bar'
import { VStack } from '@chakra-ui/react'
import GlobalStyle from '@/styles/GlobalStyle'

function MyApp({
  Component,
  pageProps,
}: {
  Component: ComponentType<any>
  pageProps: any
}) {
  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <VStack>
        <Component {...pageProps} />
      </VStack>
    </>
  )
}

export default MyApp
