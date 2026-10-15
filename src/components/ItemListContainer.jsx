import { useState, useEffect } from 'react';
import { getProducts } from '../mocks/asyncMock';
import { ItemList } from './ItemList';
import { Container } from 'react-bootstrap';

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => setProducts(res));
  }, []);

  return (
    <Container className="mt-4">
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </Container>
  );
};