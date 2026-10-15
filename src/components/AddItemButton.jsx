import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

export const AddItemButton = ({ item, quantity }) => {
  const { addItem } = useContext(CartContext);
  return (
    <Button variant="success" onClick={() => addItem(item, quantity)}>
      Agregar al carrito
    </Button>
  );
};