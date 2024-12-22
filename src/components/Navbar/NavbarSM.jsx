import React, { useEffect, useState } from 'react';
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
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
    MDBBadge,
} from 'mdb-react-ui-kit';
import logo from '../../assets/images/logos/shopping-cart-logo.png';
import { useLocation } from 'react-router-dom';

export default function NavbarSM() {
    const [openBasic, setOpenBasic] = useState(false);
    const location = useLocation();

    const [userWelcomeStyle, setUserWelcomeStyle] = useState({});
    const [userVisitStyle, setUserVisitStyle] = useState({});
    const [userCartStyle, setUserCartStyle] = useState({});

    useEffect(() => {
        console.log('Current location:', location.pathname);

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
                <MDBNavbarBrand href="#">
                    <MDBNavbarLink href="/">
                        <img src={logo} height="40" alt="" loading="lazy" />
                    </MDBNavbarLink>
                </MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setOpenBasic(!openBasic)}
                >
                    <MDBIcon icon="bars" fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar open={openBasic}>
                    <MDBNavbarNav>
                        <MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current="page" href="#">
                                    Products
                                </MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBNavbarLink href="/contactus">Contact Us</MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBNavbarLink href="/about">About</MDBNavbarLink>
                            </MDBNavbarItem>

                            {/* <MDBNavbarItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle tag="a" className="nav-link" role="button">
                                        Dropdown
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem link>Action</MDBDropdownItem>
                                        <MDBDropdownItem link>Another action</MDBDropdownItem>
                                        <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem> */}

                            {/* <MDBNavbarItem>
                                <MDBNavbarLink disabled href="#" tabIndex={-1} aria-disabled="true">
                                    Disabled
                                </MDBNavbarLink>
                            </MDBNavbarItem> */}


                        </MDBNavbarItem>

                        <MDBNavbarItem id="userWelcome" style={userWelcomeStyle}>
                            <MDBNavbarLink href="#">Username</MDBNavbarLink>
                        </MDBNavbarItem>


                        <MDBNavbarItem className="d-flex justify-content-between align-items-center gap-1">
                            {/* تم تصحيح ID واستخدام الأنماط المحفوظة في الحالة */}
                            <MDBNavbarItem id="userVisit" style={userVisitStyle}>
                                <MDBBtn className="bg-succes" type="button" size='sm'>
                                    <MDBNavbarLink href="/login">
                                        Login <MDBIcon fas icon="sign-in-alt" />
                                    </MDBNavbarLink>
                                </MDBBtn>

                                <MDBBtn className="bg-info" type="button" size='sm'>
                                    <MDBNavbarLink href="/register">
                                        Register <MDBIcon fas icon="registered" />
                                    </MDBNavbarLink>
                                </MDBBtn>
                            </MDBNavbarItem>

                            <MDBNavbarItem id="userCart" style={userCartStyle}>
                                <MDBBadge
                                    color="danger"
                                    style={{ fontSize: '1rem', width: '2rem', height: '2rem', borderRadius: '50%', lineHeight: "normal" }}
                                >
                                    0
                                </MDBBadge>
                                <MDBIcon fas icon="shopping-cart" size='2x' />
                            </MDBNavbarItem>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
