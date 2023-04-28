import { Box, Button, Heading, Text } from "@chakra-ui/react"
import backgroundImage from '../assets/image53.png'

const Home = () => {
  return (
    <Box
        backgroundImage={backgroundImage}
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        p={20}
        textAlign='center'
    >
        <Heading m='2.6em auto' color='white' maxW={650} fontWeight={800} fontSize={36}>You got the travel plans, we got the travel vans</Heading>
        <Text m='0 auto' color='white' maxW={650}>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</Text>
        <Button 
            colorScheme="orange" 
            color='white'
            w={650}
            mt={10}>
        Find your van</Button>

    </Box>
  )
}

export default Home