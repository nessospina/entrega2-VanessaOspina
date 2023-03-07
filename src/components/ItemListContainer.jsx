import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { Heading } from '@chakra-ui/react'
import data from "../products.json"


const ItemListContainer = () => {
  const { category } = useParams();
  const catFilter = data.filter((cookie) =>cookie.category === category)
  return (
    <div>
      <center>
        <Heading>
        Cookies by category
        </Heading>
      </center>
      {category ? <ItemList cookies={catFilter} /> : <ItemList cookies={data} />}
    </div>
    
  )
}

export default ItemListContainer