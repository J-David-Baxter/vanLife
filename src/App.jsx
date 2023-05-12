import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages//Vans/Vans"
import VanDetails from "./pages/Vans/VanDetails"
import { Box } from "@chakra-ui/react"
import "./server"
import Layout from "./components/Layout"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"

function App() {
  return (
    <Box backgroundColor='#FFF7ED' fontFamily='Inter' minH='100vh'>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/host" element={<Dashboard />}/>
          <Route path="/host/income" element={<Income />}/>
          <Route path="/host/reviews" element={<Reviews />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/vans" element={<Vans />}/>
          <Route path="/vans/:id" element={<VanDetails />}/>
        </Route>
      </Routes>
    </Box>
  )
}

export default App
