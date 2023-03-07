import Item from "./Item"
import { Container } from "@chakra-ui/react"

const ItemList = ({cookies}) => {
  return (
    <>
    <Container>
        {cookies?.map((cookie) => (
            <Item
            key={cookie.id}
            id={cookie.id}
            name={cookie.name}
            price={cookie.price}
            stock={cookie.stock}
            category={cookie.category}
            />
))}
    </Container>
    </>
  )
}

export default ItemList