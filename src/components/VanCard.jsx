import { Card, CardHeader, Flex, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import VanTypeBadge from "./VanTypeBadge"

const VanCard = ({ imageUrl, name, price, type, id }) => {
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
        <VanTypeBadge type={type} width={40}/>
      </Card>
    </Link>
  )
}

export default VanCard