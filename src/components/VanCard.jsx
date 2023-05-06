import { Text, Card, CardHeader, Flex, Image } from "@chakra-ui/react"
import upperCaseString from "../utils/upperCaseString"
import { Link } from "react-router-dom"


// eslint-disable-next-line react/prop-types
const VanCard = ({ imageUrl, name, price, type, id }) => {
  const badgeColors = {
    simple: '#E17654',
    luxury: '#161616',
    rugged: '#115E59'
  }
  
  return (
    <Link to={`/vans/${id}`}>
      <Card size='lg' variant='unstyled' backgroundColor='none'>
        <Image 
          src={imageUrl}
          alt={name}
          width={80}
          mb={5}
        />
        <Flex color='#161616' fontSize='20px' fontWeight={600} justify='space-between' mb={2}>
          <CardHeader >{name}</CardHeader>
          <CardHeader>${price}/day</CardHeader>
        </Flex>
        <Flex
          width={40}
          backgroundColor={badgeColors[type]}
          color={'white'}
          height={10}
          justify='center'
          align='center'
          fontWeight={600}
          >
          <Text>{upperCaseString(type)}</Text>
        </Flex>
      </Card>
    </Link>
  )
}

export default VanCard