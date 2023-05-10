import { Button, ButtonGroup, Text, Flex } from '@chakra-ui/react'

const FilterButtons = ({ loading, activeFilter, filterSimple, filterRugged, filterLuxury, clearFilters }) => {
  return (
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
  )
}

export default FilterButtons