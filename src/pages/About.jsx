import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react"
import aboutBackground from "../assets/aboutBackground.png"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <Box color='#161616' backgroundColor='#FFF7ED' >
        <Image 
            src={aboutBackground}
            alt="person sitting on a van at night"
            h={300}
            maxW='100%'
            m='0 auto'
            objectFit='cover'
        />
        <Heading lineHeight='50px' w={550} margin='2em auto'>Don’t squeeze in a sedan when you could relax in a van.</Heading>
        <Text w={550} m='0 auto' lineHeight='25px' mb={5}>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)</Text>
        <Text w={550} m='0 auto' lineHeight='25px' >Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</Text>
        <Container p={10} w={550} backgroundColor='#FFCC8D' borderRadius={10} mt={10} mb={40}>
          <Heading >Your destination is waiting. Your van is ready.</Heading>
          <Link to='/vans'>
            <Button colorScheme="teal" color='white' mt={10} w='250px' h='50px'>Expore our vans</Button>
          </Link>
        </Container>
    </Box>
  )
}

export default About