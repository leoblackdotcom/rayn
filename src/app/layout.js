import './style/globals.sass'
import './style/layout.module.sass'
import Page from './layout/Index.js'
import Header from './layout/Header.js'
import Footer from './layout/Footer.js'

export const metadata = {
  title: 'Rewardz® Automated Yield Network',
  description: 'Built by Leo Black using Next version 13'
}

export default function RootLayout({ children }) {
  return (
    <Page>
      <Header />
      {children}
      <Footer />
    </Page>
  )
}
