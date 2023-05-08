import { useParams } from "react-router-dom"
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";


const VanDetails = () => {
  const params = useParams()
  const id = params.id
  const {data, loading, error} = useFetch(`/api/vans/${id}`)

  
  return (
    <Box>
        {loading && <Spinner color="#161616" size='xl'/>}
        {error && <Text>Something went wrong!</Text>}
        <Heading>{data && data.vans.name}</Heading>
    </Box>
  )
}

export default VanDetails