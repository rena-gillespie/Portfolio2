

import Header from './Header.tsx'
import Footer from './Footer.tsx'

export default function Layout() {
  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Header />

        </div>
        <Footer />
      </div>
    </>
  )
}