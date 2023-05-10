import { Spinner, Text, Flex } from "@chakra-ui/react"
import VanCard from "./VanCard"


const VanList = ({ loading, error, filteredData }) => {
  return (
    <Flex wrap='wrap' gap={20} mt={10}>
        {loading && <Spinner color="#161616" size='xl'/>}
        {error && <Text>Something went wrong!</Text>}
        {filteredData && filteredData.map(van => (
            <VanCard 
                key={van.id} {...van}
            />
        ))}
    </Flex>
  )
}

export default VanList