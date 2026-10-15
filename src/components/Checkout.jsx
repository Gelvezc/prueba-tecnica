import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Container, Button, Alert } from 'react-bootstrap';
import { Brief } from './Brief';
import { Link } from 'react-router-dom';

export const Checkout = () => {
  const { cart, getTotal, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const handleCheckout = () => {
    const newOrderId = Math.random().toString(36).substr(2, 9).toUpperCase();
    setOrderId(newOrderId);
    clearCart(); // Vaciamos el carrito
  };

  if (orderId) {
    return (
      <Container className="mt-5 text-center">
        <Alert variant="success">
          <h2>¡Gracias por tu compra!</h2>
          <p>Tu orden ha sido procesada con éxito.</p>
          <hr />
          <p className="mb-0">El número de tu orden es: <strong>{orderId}</strong></p>
        </Alert>
        <Button as={Link} to="/" variant="primary" className="mt-3">Volver al catálogo</Button>
      </Container>
    );
  }

  if (cart.length === 0) {
    return (
      <Container className="mt-4 text-center">
        <h3>El carrito está vacío</h3>
        <Button as={Link} to="/" variant="primary" className="mt-3">Ir a comprar</Button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2>Resumen de compra</h2>
      <Brief cart={cart} />
      <h4 className="text-end">Total a pagar: ${getTotal()}</h4>
      <div className="d-flex justify-content-end mt-3">
        <Button variant="success" size="lg" onClick={handleCheckout}>
          Finalizar Compra
        </Button>
      </div>
    </Container>
  );
};