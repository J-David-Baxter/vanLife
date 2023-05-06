import { Box, Button, ButtonGroup, Flex, Heading, Spinner, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import VanCard from "../components/VanCard"

const Vans = () => {
  const [vans, setVans] = useState([])
  const [activeFilter, setActiveFilter] = useState({
    simple: false,
    luxury: false,
    rugged: false,
  })

  useEffect(() => {
    fetch('/api/vans')
        .then(res => res.json())
        .then(data => setVans(data.vans))
  }, [])

  function filterSimple() {
    setActiveFilter({simple: true, luxury: false, rugged: false})
  }

  function filterLuxury() {
    setActiveFilter({simple: false, luxury: true, rugged: false})
  }

  function filterRugged() {
    setActiveFilter({simple: false, luxury: false, rugged: true})
  }

  function clearFilters() {
    setActiveFilter({simple: false, luxury: false, rugged: false})
  }
  
  return (
    <Box p={10} ml={20}>
        <Heading color='#161616' fontSize='40px' mb={10}>Explore our van options</Heading>
        <Flex gap={20} align='center'>
            <ButtonGroup gap={10} size='lg'>
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
          {vans.length < 1 && <Spinner color="#161616" size='xl'/>}
            {vans.map(van => (
                <VanCard 
                  key={van.id} {...van}
                />
            ))}
        </Flex>
    </Box>
  )
}

export default Vans