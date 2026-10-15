import { Row } from 'react-bootstrap';
import { Item } from './Item';

export const ItemList = ({ products }) => {
  return (
    <Row>
      {products.map(prod => <Item key={prod.id} {...prod} />)}
    </Row>
  );
};