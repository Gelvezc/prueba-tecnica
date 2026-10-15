import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

export const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  return (
    <Link to="/checkout" style={{ textDecoration: 'none', color: 'white' }}>
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      {getTotalQuantity() > 0 && <Badge bg="danger" className="ms-1">{getTotalQuantity()}</Badge>}
    </Link>
  );
};