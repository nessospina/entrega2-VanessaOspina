import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';


function NavBar() {
    return (
    <Navbar className="navBar-container" sticky="top" expand="lg">
        <Container>
        <Link to={`/`}><Navbar.Brand><img className="logo" src="http://mysugarbox.com/wp-content/uploads/2019/04/sugarbox-logo-mobile.png" alt="" /></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="catalogue">Catalogo</Nav.Link>

            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <button>
                <Link to={`/category/${"Clasicas"}`}>Clasicas</Link>
                </button>
                <hr />
                <button>
                <Link to={`/category/${"Veganas"}`}>Veganas</Link>
                </button>                
                <hr />
                <button>
                <Link to={`/category/${"Especiales"}`}>Especiales</Link>
                </button>
                <hr />
                <button>
                <Link to={`/category/${"Rellenas"}`}>Rellenas</Link>
                </button>

            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        <CartWidget/>
        </Container>
    </Navbar>
    );
}

export default NavBar;