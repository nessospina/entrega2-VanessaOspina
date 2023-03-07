
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from "../products.json"

const Item = ({ id, name, stock, category, price, imgUrl }) => {
  return (
    <div key={id}>
    <Card className="item-card">
    <img src="https://picsum.photos/100" alt="" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
                Category: {category}
              </Card.Text>
              <Card.Text>
                Stock: {stock}
              </Card.Text>
              <Card.Text>
                Price: {price}
              </Card.Text>
        <Button variant="danger">Añadir al carrito</Button>
      </Card.Body>
    </Card>

    <Card.Footer>
                <center>
                  <Button className="BotonCard" variant="danger">
                    <Link to={`/item/${id}`}>Detalles</Link>
                  </Button>
                </center>
              </Card.Footer>
    </div>
  );
}

export default Item;

