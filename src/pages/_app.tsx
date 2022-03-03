import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'layout/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title="Landing Page">
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
