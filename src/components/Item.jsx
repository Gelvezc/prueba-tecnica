import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Item = ({ id, name, price, img }) => {
  return (
    <Col md={4} className="mb-3">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>${price}</Card.Text>
          <Button as={Link} to={`/item/${id}`} variant="primary">Ver más</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};