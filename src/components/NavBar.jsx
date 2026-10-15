import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">DevStore</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Catálogo</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};