import { ComponentType } from 'react'
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
      <NavigationBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
