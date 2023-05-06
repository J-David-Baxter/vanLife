import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import getVans from "../utils/getVans"
import { Box } from "@chakra-ui/react";


const VanDetails = () => {
  const params = useParams()
  const id = params.id
  const [van, setVan] = useState(null)

  useEffect(() => {
    getVans(`/api/vans/${id}`)
        .then(data => setVan(data.vans));
  }, [id])

  const {imageUrl, name, price, type, description} = van
  
  return (
    <Box>
        
    </Box>
  )
}

export default VanDetails