import { Container, Navbar as NavbarBS } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <NavbarBS className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Sore
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        there is a cart
      </Container>
    </NavbarBS>
  );
}
