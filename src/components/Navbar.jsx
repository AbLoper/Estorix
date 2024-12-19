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
export default function NavScroll() {
    return (
        <Navbar collapseOnSelect expand="md" className="bg-body-tertiary fixed-top">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={Logo}
                        width="50rem"
                        height="50rem"
                        className="d-inline-block align-top"
                        alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-secondary text-light'>O</Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav" className='d-flex justify-content-between align-items-center'>
                    <Nav>
                        <Nav.Link href="/">Products</Nav.Link>
                        <Nav.Link href="/contactus">Contact Us</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    <Nav className='align-items-center'>
                        <div id="userRegistered" className='d-flex justify-content-center' style={{ backgroundColor: "lightblue", height: "3.5rem" }} >
                            <h6 style={{ lineHeight: "3.5rem" }}>Welcome 'User'</h6>
                        </div>

                        <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: "lightsalmon" }}>
                            <Nav.Link href="/login">
                                <Button variant="outline-primary">Login<LoginIcon /></Button>
                            </Nav.Link>
                            <Nav.Link href="/register">
                                <Button variant="outline-primary">SignUp<AppRegistrationIcon /></Button>
                            </Nav.Link>
                        </div>
                        <div className='d-flex justify-content-center align-items-center gap-2' style={{ backgroundColor: "lightgreen", lineHeight: "2.5rem" }}>
                            <Nav.Link href='/checkout'>
                                <ShoppingCartIcon fontSize='large' />
                                <MDBBadge color='danger' notification pill>
                                    13
                                </MDBBadge>
                            </Nav.Link>
                            <Nav.Link href='/favorites'>
                                <FavoriteIcon fontSize='large' />
                                <MDBBadge color='danger' notification pill>
                                    6
                                </MDBBadge>
                            </Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}



