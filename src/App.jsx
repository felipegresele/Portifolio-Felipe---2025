import { BrowserRouter } from "react-router-dom"

import NavBar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Tech from "./components/Tech"
import Work from "./components/Work"
import Contact from "./components/Contact"

const App = () => {
  return (
    <>
      <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <NavBar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Work />
        <Contact />
      </div>
    </BrowserRouter>
    </>
  )
}

export default App