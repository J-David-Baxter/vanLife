import { Flex, Text } from "@chakra-ui/react"
import upperCaseString from "../utils/upperCaseString"

// eslint-disable-next-line react/prop-types
const VanTypeBadge = ({ type, width }) => {
  const badgeColors = {
    simple: '#E17654',
    luxury: '#161616',
    rugged: '#115E59'
  }
  
  return (
    <Flex
        width={width}
        backgroundColor={badgeColors[type]}
        color={'white'}
        height={10}
        justify='center'
        align='center'
        fontWeight={600}
        >
        <Text>{upperCaseString(type)}</Text>
    </Flex>
  )
}

export default VanTypeBadge