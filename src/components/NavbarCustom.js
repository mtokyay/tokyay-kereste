import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth } from "./../util/auth.js";
import { useRouter } from "./../util/router.js";

function NavbarCustom(props) {
  // eslint-disable-next-line
  const auth = useAuth();
  // eslint-disable-next-line
  const router = useRouter();

  return (
    <Navbar bg={props.bg} variant={props.variant} expand={props.expand}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              className="d-inline-block align-top"
              src={props.logo}
              alt="Logo"
              height="30"
            />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="mr-1">
            <NavDropdown title="Hakkımızda">
              <LinkContainer to="/biz-kimiz">
                <NavDropdown.Item>Biz Kimiz?</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/yasal-bilgiler">
                <NavDropdown.Item>Yasal Bilgiler</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Ürünlerimiz">
              <LinkContainer to="/urunlerimiz">
                <NavDropdown.Item>Bütün Ürünlerimiz</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/urunlerimiz/insaatlik-kereste">
                <NavDropdown.Item>İnşaatlık Kereste</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/urunlerimiz/dogramalik-kereste">
                <NavDropdown.Item>Doğramalık Kereste</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to="/agac-tomruk-kereste-cesitleri">
              <Nav.Link active={false}>Tomruk Kereste Çeşitleri</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/blog">
              <Nav.Link active={false}>Blog</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/sorular">
              <Nav.Link active={false}>Sorulan Sorular?</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/iletisim">
              <Nav.Link>İletişim</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
