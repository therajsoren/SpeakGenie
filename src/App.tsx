import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Navbar/>
      <Hero/>
    </div>
  )
}
export default App