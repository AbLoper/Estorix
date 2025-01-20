import React from 'react';
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
} from 'mdb-react-ui-kit';
import assets from '../../assets';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function NavbarLG() {
    const location = useLocation();
    // const [userWelcomeStyle, setUserWelcomeStyle] = useState({});
    const [userVisitStyle, setUserVisitStyle] = useState({});
    const [userCartStyle, setUserCartStyle] = useState({});
    const cartItemsLength = useSelector(state => state.cart.items.length);
    const [cartItemsCount, setCartItemsCount] = useState(cartItemsLength)

    useEffect(() => {
        setCartItemsCount(cartItemsLength)
    }, [cartItemsLength])

    useEffect(() => {
        console.log('Current location:', location.pathname);

        if (location.pathname === '/login' || location.pathname === '/register') {
            // setUserWelcomeStyle({ display: 'none' });
            setUserVisitStyle({ display: 'none' });
            setUserCartStyle({ display: 'none' });
        } else {
            // setUserWelcomeStyle({ display: 'flex' });
            setUserVisitStyle({display: 'flex'});
            setUserCartStyle({ display: 'flex' });
        }
    }, [location]);

    return (
        <MDBNavbar expand='lg' light bgColor='light' fixed='top'>
            <MDBContainer>

                <MDBNavbarBrand href="/">
                    <img src={assets.logos.LogoApp} height="40" alt="" loading="lazy" />
                </MDBNavbarBrand>

                <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>

                    <MDBNavbarItem>
                        <MDBNavbarLink active href='/products'>
                            Products
                        </MDBNavbarLink>
                    </MDBNavbarItem>

                    <MDBNavbarItem>
                        <MDBNavbarLink href='/contactus'>
                            ContactUs
                        </MDBNavbarLink>
                    </MDBNavbarItem>

                    <MDBNavbarItem>
                        <MDBNavbarLink href='/about'>
                            About
                        </MDBNavbarLink>
                    </MDBNavbarItem>

                </MDBNavbarNav>

                <MDBNavbarNav className='justify-content-end'>

                    <MDBNavbarItem style={userVisitStyle}>
                        <div className='d-flex align-items-center gap-1'>
                            <MDBBtn href='/login' outline rounded color="primary" size='sm' type='button'>
                                Login
                            </MDBBtn>
                            <MDBBtn href='/register' outline rounded color="secondary" size="sm" type='button'>
                                Register
                            </MDBBtn>
                        </div>
                    </MDBNavbarItem>

                    <MDBNavbarItem style={userCartStyle}>
                        <MDBNavbarLink href='#'>
                            <MDBBadge pill color='danger'>
                                {cartItemsCount}
                            </MDBBadge>
                            <span>
                                <MDBIcon fas icon='shopping-cart' size='lg'></MDBIcon>
                            </span>
                        </MDBNavbarLink>
                    </MDBNavbarItem>

                </MDBNavbarNav>

            </MDBContainer>
        </MDBNavbar>
    );
}