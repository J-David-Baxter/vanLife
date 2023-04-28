import { Button, Heading, Stack, Text } from "@chakra-ui/react"
import backgroundImage from '../assets/image53.png'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <Stack
        backgroundImage={backgroundImage}
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        align='center'
        justify='center'
        textAlign='center'
        h='100%'
    >
        <Heading color='white' mt={-40} maxW={650} fontWeight={800} fontSize={36}>You got the travel plans, we got the travel vans</Heading>
        <Text m='0 auto' color='white' maxW={650}>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</Text>
        <Link to='/vans'>
          <Button 
              colorScheme="orange" 
              color='white'
              w={650}
              mt={10}>
          Find your van</Button>
        </Link>

    </Stack>
  )
}

export default Home