import Head from 'next/head'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Work from '@/components/Work'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Certifications from '@/components/Certifications'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Christopher Pezza | Architect, Developer, Husband, Father, Streamer</title>
      </Head>
      <div>
        <Hero />
        <About />
        <Certifications />
        <Work />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
