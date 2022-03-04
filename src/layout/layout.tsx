// layout to be reuse for multiple pages

import * as React from 'react'
import Head from 'next/head'
import Header from 'modules/Header'
import Footer from 'modules/Footer'

type LayoutProps = {
  title?: string
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
  <div className="relative min-h-screen">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="max-w-2xl mx-auto font-sans">
      <Header />
      {children}
      <Footer />
    </div>
  </div>
)
export default Layout
