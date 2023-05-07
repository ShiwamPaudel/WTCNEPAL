import Nav1 from '@/components/Nav1'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <Nav1/>
  <Component {...pageProps} />
    </>
  ) 
}
