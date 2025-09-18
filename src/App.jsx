import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hero } from './components/Hero'
import { Gallery } from './components/Gallery'
import { About } from './components/About'
// import { Footer } from './components/Footer'
import BlogSection from './components/BlogSection'
import FAQSection from './components/FAQSection'
import Footer2 from './components/Footer2'
import Features from './components/Features'
import { Team } from './components/Team'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Features />
      <About />
      <Gallery />
      <Team />
      <BlogSection />
      <FAQSection />
      {/* <Footer /> */}
      <Footer2 />
    </>
  )
}

export default App
