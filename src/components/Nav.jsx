import { Flex, Heading } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

const Nav = () => {
  return (
    <Flex gap={5} align='center'>
        <Heading>VanLife</Heading>
        <Link as={RouterLink} to="/" >Home</Link>
        <Link as={RouterLink} to="/about" >About</Link>
    </Flex>
  )
}

export default Nav