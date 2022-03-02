import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Layout from 'layout/layout'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    router.push('/landing-page')
  })

  return (
    <Layout title="Landing Page">
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
