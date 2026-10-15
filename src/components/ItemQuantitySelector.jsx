import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { AddItemButton } from './AddItemButton';

export const ItemQuantitySelector = ({ item, stock }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => quantity < stock && setQuantity(quantity + 1);
  const decrement = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div className="d-flex flex-column gap-2">
      <div className="d-flex align-items-center gap-3">
        <Button variant="outline-secondary" onClick={decrement}>-</Button>
        <span>{quantity}</span>
        <Button variant="outline-secondary" onClick={increment}>+</Button>
      </div>
      <AddItemButton item={item} quantity={quantity} />
    </div>
  );
};