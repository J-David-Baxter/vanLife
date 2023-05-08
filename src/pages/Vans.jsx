import { Box, Button, ButtonGroup, Flex, Heading, Spinner, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import VanCard from "../components/VanCard"
import useFetch from "../hooks/useFetch"

const Vans = () => {
  const { data, loading, error} = useFetch('/api/vans')
  const [filteredData, setFilteredData] = useState(null)
  const [activeFilter, setActiveFilter] = useState({
    simple: false,
    luxury: false,
    rugged: false,
  })
  
  useEffect(() => {
    setFilteredData(data && data.vans)
  }, [data])

  function filterSimple() {
    setActiveFilter({simple: true, luxury: false, rugged: false})
    setFilteredData(data.vans.filter(van => van.type === 'simple'))
  }

  function filterLuxury() {
    setActiveFilter({simple: false, luxury: true, rugged: false})
    setFilteredData(data.vans.filter(van => van.type === 'luxury'))
  }

  function filterRugged() {
    setActiveFilter({simple: false, luxury: false, rugged: true})
    setFilteredData(data.vans.filter(van => van.type === 'rugged'))
  }

  function clearFilters() {
    setActiveFilter({simple: false, luxury: false, rugged: false})
    setFilteredData(data.vans)
  }
  
  return (
    <Box p={10} ml={20}>
        <Heading color='#161616' fontSize='40px' mb={10}>Explore our van options</Heading>
        <Flex gap={20} align='center'>
            <ButtonGroup gap={10} size='lg' isDisabled={loading}>
                <Button 
                    backgroundColor='#FFEAD0' 
                    isActive={activeFilter.simple} 
                    _active={{backgroundColor: '#E17654', color: 'white'}} 
                    _hover={{backgroundColor: '#E17654' , color: 'white'}}
                    onClick={filterSimple}>Simple
                </Button>
                <Button 
                    backgroundColor='#FFEAD0' 
                    isActive={activeFilter.luxury}
                    _active={{backgroundColor: '#161616', color: 'white'}}
                    _hover={{backgroundColor: '#161616', color: 'white'}}
                    onClick={filterLuxury}
                    >Luxury
                </Button>
                <Button 
                    backgroundColor='#FFEAD0' 
                    isActive={activeFilter.rugged}
                    _active={{backgroundColor: '#115E59', color: 'white'}}
                    _hover={{backgroundColor: '#115E59', color: 'white'}}
                    onClick={filterRugged}>Rugged
                </Button>  
            </ButtonGroup>
            <Text textDecoration='underline' cursor='pointer' onClick={clearFilters}>Clear filters</Text>
        </Flex>
        <Flex wrap='wrap' gap={20} mt={10}>
          {loading && <Spinner color="#161616" size='xl'/>}
          {error && <Text>Something went wrong!</Text>}
            {filteredData && filteredData.map(van => (
                <VanCard 
                  key={van.id} {...van}
                />
            ))}
        </Flex>
    </Box>
  )
}

export default Vans