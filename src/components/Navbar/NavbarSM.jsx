import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBBadge,
    MDBCollapse,
    MDBNavbarToggler,
} from 'mdb-react-ui-kit';
import logo from '../../assets/images/logos/shopping-cart-logo.png';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';


export default function NavbarSM() {
    const [openBasic, setOpenBasic] = useState(false);
    const location = useLocation();

    const [userWelcomeStyle, setUserWelcomeStyle] = useState({});
    const [userVisitStyle, setUserVisitStyle] = useState({});
    const [userCartStyle, setUserCartStyle] = useState({});

    // const cartItemsLength = useSelector(state => state.cart.items.length);

    // const [cartItemsCount, setCartItemsCount] = useState(cartItemsLength)

    // useEffect(() => {
    //     setCartItemsCount(cartItemsLength)
    // }, [cartItemsLength])

    useEffect(() => {
        // console.log('Current location:', location.pathname);

        if (location.pathname === '/login' || location.pathname === '/register') {
            setUserWelcomeStyle({ display: 'none' });
            setUserVisitStyle({ display: 'none' });
            setUserCartStyle({ display: 'none' });
        } else {
            setUserWelcomeStyle({ display: 'flex' });
            setUserVisitStyle({
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '.5rem',
            });
            setUserCartStyle({ display: 'flex' });
        }
    }, [location]);

    return (
        <MDBNavbar expand="lg" light bgColor="light" fixed='top'>

            <MDBContainer>

                <MDBNavbarBrand href="/">
                    <img src={logo} height="40" alt="" loading="lazy" />
                </MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => {
                        setOpenBasic(!openBasic)
                        console.log("Toggler clicked, current state:", openBasic);
                    }
                    }
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar open={openBasic}>
                    <MDBNavbarNav>
                        <MDBNavbarItem><MDBNavbarLink active aria-current="page" href="/">Products</MDBNavbarLink></MDBNavbarItem>
                        <MDBNavbarItem><MDBNavbarLink href="/contactus">Contact Us</MDBNavbarLink></MDBNavbarItem>
                        <MDBNavbarItem><MDBNavbarLink href="/about">About</MDBNavbarLink></MDBNavbarItem>


                        <MDBNavbarItem id="userWelcome" style={userWelcomeStyle}>
                            <MDBNavbarLink href="#">Username</MDBNavbarLink>
                        </MDBNavbarItem>


                        <MDBNavbarItem className="d-flex justify-content-between align-items-center gap-1">
                            <MDBBtn className="bg-succes" type="button" size='sm' href="/login">
                                Login <MDBIcon fas icon="sign-in-alt" />
                            </MDBBtn>

                            <MDBBtn className="bg-info" type="button" size='sm' href="/register">
                                Register <MDBIcon fas icon="registered" />
                            </MDBBtn>
                        </MDBNavbarItem>


                        <MDBNavbarItem id="userCart" style={userCartStyle} className='d-flex justify-content-center align-items-center'>

                            <MDBBadge
                                color="danger"
                                style={{ fontSize: '1rem', width: '100%', height: '2rem', borderRadius: '50%' }}
                            >

                                {/* <p className='mt-1'>{cartItemsCount}</p> */}

                            </MDBBadge>

                            <MDBNavbarLink href='/cart'>
                                <MDBIcon fas icon="shopping-cart" size='xl' />
                            </MDBNavbarLink>

                        </MDBNavbarItem>

                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar >
    );
}