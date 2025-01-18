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
    MDBBtnGroup,
} from 'mdb-react-ui-kit';
import logo from '../../assets/images/logos/shopping-cart-logo.png';

export default function NavbarLG() {
    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer>

                <MDBNavbarBrand href="/">
                    <img src={logo} height="40" alt="" loading="lazy" />
                </MDBNavbarBrand>


                <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>

                    <MDBNavbarItem>
                        <MDBNavbarLink active aria-current='page' href='#'>
                            Home
                        </MDBNavbarLink>
                    </MDBNavbarItem>

                    <MDBNavbarItem>
                        <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                            Disabled
                        </MDBNavbarLink>
                    </MDBNavbarItem>

                    <MDBNavbarItem>
                        <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                            Disabled
                        </MDBNavbarLink>
                    </MDBNavbarItem>

                </MDBNavbarNav>

                <MDBNavbarNav className='justify-content-end'>

                    <MDBNavbarItem className='d-flex justify-content-center align-items-center gap-1'>
                        <MDBBtnGroup className='gap-1'>
                            <MDBBtn outline rounded color="primary" size='sm' type='button'>
                                Login
                            </MDBBtn>
                            <MDBBtn outline rounded color="secondary" size="sm" type='button'>
                                Register
                            </MDBBtn>
                        </MDBBtnGroup>
                    </MDBNavbarItem>

                    <MDBNavbarItem className='d-flex justify-content-center align-items-center'>
                        <MDBNavbarLink href='#'>
                            <MDBBadge pill color='danger'>!</MDBBadge>
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