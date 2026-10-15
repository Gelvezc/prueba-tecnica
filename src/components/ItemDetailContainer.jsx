import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../mocks/asyncMock';
import { ItemDetail } from './ItemDetail';
import { Container } from 'react-bootstrap';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then(res => setProduct(res));
  }, [id]);

  return <Container className="mt-4">{product ? <ItemDetail {...product} /> : <p>Cargando...</p>}</Container>;
};