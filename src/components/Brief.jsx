import { useContext } from 'react';
import { ListGroup, Button, ButtonGroup } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Brief = ({ cart }) => {
  const { removeItem, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <ListGroup className="mb-3">
      {cart.map(prod => (
        <ListGroup.Item key={prod.id} className="d-flex justify-content-between align-items-center">
          
          <div className="d-flex align-items-center gap-3">
            <span>{prod.name}</span>
            {/* Controles de cantidad */}
            <ButtonGroup size="sm">
              <Button variant="outline-secondary" onClick={() => decreaseQuantity(prod.id)}>-</Button>
              <Button variant="outline-secondary" disabled className="text-dark fw-bold">{prod.quantity}</Button>
              <Button variant="outline-secondary" onClick={() => increaseQuantity(prod.id, prod.stock)}>+</Button>
            </ButtonGroup>
          </div>

          <div>
            <span className="me-3">Subtotal: ${prod.price * prod.quantity}</span>
            <Button variant="danger" size="sm" onClick={() => removeItem(prod.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
          
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};