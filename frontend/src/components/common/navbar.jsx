import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";

function MyNavbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Viaje Compartido</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/acceso">Acceso</Nav.Link>
            <Nav.Link href="/registrarse">Registrarse</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
