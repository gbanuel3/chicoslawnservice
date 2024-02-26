import { ComponentType } from 'react'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import NavigationBar from '@/components/navigation_bar'

function MyApp({
  Component,
  pageProps,
}: {
  Component: ComponentType<any>
  pageProps: any
}) {
  return (
    <>
      <Theme>
        <NavigationBar />
        <Component {...pageProps} />
      </Theme>
    </>
  )
}

export default MyApp
