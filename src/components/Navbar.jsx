import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { MDBBadge } from 'mdb-react-ui-kit';
import Logo from '../assets/images/logos/shopping-cart-logo.png'


function NavScroll() {
    return (
        <Navbar collapseOnSelect expand="md" className="bg-body-tertiary fixed-top">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={Logo}
                        width="50rem"
                        height="50rem"
                        className="d-inline-block align-top"
                        alt="Logo"
                    /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-danger'>/-/</Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="/contactus">Contact Us</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">
                            <Button variant="outline-primary">Login<LoginIcon /></Button>
                        </Nav.Link>
                        <Nav.Link href="/register">
                            <Button variant="outline-primary">SignUp<AppRegistrationIcon /></Button>
                        </Nav.Link>
                    </Nav>
                    <div className='cartInbox d-flex justify-content-around align-items-center gap-4'>
                        <a href='/checkout'>
                            <ShoppingCartIcon fontSize='large' />
                            <MDBBadge color='danger' notification pill>
                                13
                            </MDBBadge>
                        </a>
                        <a href='/checkout'>
                            <FavoriteIcon fontSize='large' />
                            <MDBBadge color='danger' notification pill>
                                6
                            </MDBBadge>
                        </a>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScroll;



