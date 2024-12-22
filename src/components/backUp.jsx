import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { MDBBadge } from 'mdb-react-ui-kit';
import Logo from '../assets/images/logos/shopping-cart-logo.png';
import { useLocation } from 'react-router';
import { useEffect } from 'react';

export default function NavScroll() {
    const location = useLocation();

    useEffect(() => {
        const welcomeUSER = document.getElementById('welcomeUSER');
        const userVisit = document.getElementById('UserVisit');
        const userCart = document.getElementById('userCart');

        if (userVisit) {
            if (location.pathname === '/login' || location.pathname === '/register') {
                welcomeUSER.style.display = 'none';
                userVisit.style.display = 'none';
                userCart.style.display = 'none';
            } else {
                welcomeUSER.style.display = 'flex';
                userVisit.style.display = 'flex';
                userCart.style.display = 'flex';
            }
        }

    }, [location]);

    return (
        <Navbar collapseOnSelect expand="md" className="bg-body-tertiary fixed-top">
            <Container>
                <Navbar.Brand href="/" id='logo'>
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
                    <Nav id="WelcomeUSER" style={{
                        display: "flex",
                        justifyContent: "center",
                        height: "3.6rem",
                    }} >
                        <h6 id='welcomeUSER' style={{ lineHeight: "3.5rem" }}>Welcome USER</h6>
                    </Nav>

                    <Nav className='align-items-center gap-1'>
                        <div id='UserVisit' style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Nav.Link href="/login" id=''>
                                <Button variant="outline-primary">Login<LoginIcon /></Button>
                            </Nav.Link>
                            <Nav.Link href="/register" id=''>
                                <Button variant="outline-primary">SignUp<AppRegistrationIcon /></Button>
                            </Nav.Link>
                        </div>
                        <Nav id='userCart' style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: ".5rem",
                            lineHeight: "2.5rem"
                        }}>
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
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
