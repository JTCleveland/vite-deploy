import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MyNavbar() {
  return (
    <div>
      <BootstrapNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <BootstrapNavbar.Brand href="#home">Pizzería Mamma Mia!</BootstrapNavbar.Brand>  
          <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
          <BootstrapNavbar.Collapse id="responsive-navbar-nav">  
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>              
            </Nav>
            <Nav>                                     
              <NavDropdown title="Menu" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Pizzas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Bebidas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Postres</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Reservas</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </div>
  ) 
}
