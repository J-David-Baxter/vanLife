import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Nav from "./components/Nav"
import Vans from "./pages/Vans"
import Footer from "./components/Footer"
import VanDetails from "./pages/VanDetails"
import { Box } from "@chakra-ui/react"
import "./server"

function App() {
  return (
    <Box backgroundColor='#FFF7ED' fontFamily='Inter'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />}/>
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
