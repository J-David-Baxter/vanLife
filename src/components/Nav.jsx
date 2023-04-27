import { Flex, Heading } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

const Nav = () => {
  return (
    <Flex gap={10} align='center' backgroundColor='#FFF7ED' p={10} fontFamily='Inter'>
        <Link as={RouterLink} to="/" mr='auto' _hover={{textDecoration: 'none'}}>
            <Heading fontFamily='Inter'>#VANLIFE</Heading>
        </Link>
        <Link as={RouterLink} to="/about" fontSize={20} color='#4D4D4D' mr={5}>About</Link>
        <Link as={RouterLink} to="/vans" fontSize={20} color='#4D4D4D' mr={5}>Vans</Link>
    </Flex>
  )
}

export default Nav