import { Card } from 'react-bootstrap';
import { ItemQuantitySelector } from './ItemQuantitySelector';

export const ItemDetail = ({ id, name, price, img, description, stock }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Precio: ${price}</Card.Text>
        <ItemQuantitySelector item={{ id, name, price }} stock={stock} />
      </Card.Body>
    </Card>
  );
};