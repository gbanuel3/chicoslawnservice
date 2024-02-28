import { ComponentType } from 'react'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import NavigationBar from '@/components/navigation_bar'
import VStack from '@/components/vstack'

function MyApp({
  Component,
  pageProps,
}: {
  Component: ComponentType<any>
  pageProps: any
}) {
  return (
    <Theme>
      <NavigationBar />
      <VStack style={{ marginTop: '5rem' }}> {/* Adjust the value as needed to match the Navbar's height */}
        <Component {...pageProps} />
      </VStack>
    </Theme>
  )
}

export default MyApp