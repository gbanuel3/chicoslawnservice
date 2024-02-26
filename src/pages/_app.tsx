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
    <html>
      <body>
      <Theme>
        <NavigationBar />
        <Component {...pageProps} />
      </Theme>
      </body>
    </html>
    </>
  )
}

export default MyApp
