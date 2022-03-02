// layout to be reuse for multiple pages

import * as React from 'react'
import Head from 'next/head'
import Header from 'modules/Header'
import Footer from 'modules/Footer'

type LayoutProps = {
  title?: string
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
)
export default Layout
