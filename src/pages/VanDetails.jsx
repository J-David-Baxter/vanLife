import { Link, useParams } from "react-router-dom"
import { Heading, Image, Spinner, Text, Stack } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";
import VanTypeBadge from "../components/VanTypeBadge";


const VanDetails = () => {
  const params = useParams()
  const id = params.id
  const {data, loading, error} = useFetch(`/api/vans/${id}`)
  
 return (
    <>
      <Link to='/vans'><Text textDecoration='underline' cursor='pointer' ml={10}>Back to all vans</Text></Link>
      <Stack w='50%' align='center' m='0 auto' gap={10} mb={10}>
        {loading && <Spinner color="#161616" size='xl'/>}
        {error && <Text>Something went wrong!</Text>}
        <Image 
          src={data && data.vans.imageUrl}
          alt={data && data.vans.name}
        />
        <Stack alignSelf='start' gap={5}>
          <VanTypeBadge type={data && data.vans.type} width={60}/>
          <Heading>{data && data.vans.name}</Heading>
          <Heading>${data && data.vans.price}/day</Heading>
          <Text lineHeight={1.5}>{data && data.vans.description}</Text>
        </Stack>
      </Stack>
    </>
  )
}

export default VanDetails