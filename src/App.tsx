import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Industries from './components/Industries'
import WhyUs, { Process } from './components/WhyUs'
import CtaBand from './components/CtaBand'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#services">
        Skip to services
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <WhyUs />
        <Process />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
