import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Navbar/>
      <Hero/>
      <CTA/>
      <Footer/>
    </div>
  )
}
export default App