import { Box, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import VanList from "../../components/VanList"
import FilterButtons from "../../components/FilterButtons"

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
    <Box p={10} ml={20} minHeight='100%'>
        <Heading color='#161616' fontSize='40px' mb={10}>Explore our van options</Heading>
        <FilterButtons 
          loading={loading} 
          activeFilter={activeFilter} 
          filterSimple={filterSimple} 
          filterLuxury={filterLuxury} 
          filterRugged={filterRugged}
          clearFilters={clearFilters}
        />
        <VanList loading={loading} error={error} filteredData={filteredData}/>
    </Box>
  )
}

export default Vans