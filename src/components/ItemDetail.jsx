import ItemCount from "./ItemCount"
import { Card, CardBody, CardFooter, Button } from '@chakra-ui/react'
import { useParams } from "react-router-dom"

const ItemDetail = ({ cookies }) => {
  const {id} = useParams();

  const cookieFilter = cookies.filter((cookie) => cookie.id == id);
  return (
    <>
    {cookieFilter.map((cookie) => (
      <div key={cookie.id}>
        <center>
        <Card className="card-main" maxW='sm'>
  <CardBody>
  <Img borderRadius="lg" src={cookie.img} />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{cookie.name}</Heading>
      <Text color='blue.600' fontSize='xl'>
        Descripción:{cookie.description}
      </Text>
      <Text color='blue.600' fontSize='xl'>
        Categoría:{cookie.category}
      </Text>
      <Text color='blue.600' fontSize='xl'>
        Stock:{cookie.stock}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      Precio: {cookie.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ItemCount
    img={cookie.img}
    stock={cookie.stock}
    id={cookie.id}
    price={cookie.price}
    name={cookie.name}
    />
  </CardFooter>
</Card>
        </center>
      </div>
    ))}
    </>
  )
}

export default ItemDetail