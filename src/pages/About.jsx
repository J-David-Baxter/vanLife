import { Box, Image } from "@chakra-ui/react"
import aboutBackground from "../assets/aboutBackground.png"

const About = () => {
  return (
    <Box>
        <Image 
            src={aboutBackground}
            alt="person sitting on a van at night"
            boxSize={500}
            maxW='100%'
            
            objectFit='cover'
            
        />
    </Box>
  )
}

export default About