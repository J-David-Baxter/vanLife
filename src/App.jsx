import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { Box } from "@chakra-ui/react"

function App() {
  return (
    <Box backgroundColor='#FFF7ED' fontFamily='Inter' h='100vh'>
      <Nav />
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
