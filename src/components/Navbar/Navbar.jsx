import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBCollapse,
    MDBBadge,
} from 'mdb-react-ui-kit';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Styles from '../css/navbar.module.css'
import logo from '../../assets/images/logos/shopping-cart-logo.png';

export default function NavbarApp() {
    const [openBasic, setOpenBasic] = useState(false);
    const cartItemsLength = useSelector(state => state.cart.items.length);
    const location = useLocation();
    const [userWelcomeStyle, setUserWelcomeStyle] = useState({});
    const [userVisitStyle, setUserVisitStyle] = useState({});
    const [userCartStyle, setUserCartStyle] = useState({});
    const [cartItemsCount, setCartItemsCount] = useState(cartItemsLength)

    useEffect(() => {
        setCartItemsCount(cartItemsLength)
    }, [cartItemsLength])

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
                // gap: '.5rem',
            });
            setUserCartStyle({ display: 'flex' });
        }
    }, [location]);

    return (
        <MDBNavbar expand='md' light bgColor='light' fixed='top'>
            <MDBContainer>
                <MDBNavbarBrand href='/' >
                    <img
                        src={logo}
                        height='30'
                        alt='logo'
                        loading='lazy'
                    />
                </MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenBasic(!openBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar open={openBasic}>
                    {/* <div className={Styles.collapse}> */}
                    <div className='d-md-flex align-items-center'>
                        <div>
                            <MDBNavbarNav>
                                <MDBNavbarItem>
                                    <MDBNavbarLink active href="/products">Products</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href="/contactus">Contact Us</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href="/about">About</MDBNavbarLink>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </div>

                        {/* <div style={{marginLeft:'30vw'}}>
                        </div> */}

                        <div id="userVisit" style={userVisitStyle}>
                        {/* <div className='d-md-flex align-items-center'  id="userVisit" style={userVisitStyle}> */}

                            <MDBBtn href='/login' rounded color="info" size='sm' type='button' className='ms-md-2'>
                                Login
                            </MDBBtn>
                            <MDBBtn href='/register' outline rounded color="secondary" size="sm" type='button' className='m-1'>
                                Register
                            </MDBBtn>

                            <MDBNavbarLink href='#' className='d-flex flex-row align-items-center m-2'>
                                <MDBBadge pill color='danger'>17</MDBBadge>
                                <MDBIcon fas icon='shopping-cart' size='lg'></MDBIcon>
                            </MDBNavbarLink>

                        </div>

                    </div>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}