import React, { useState } from 'react';
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

export default function App() {
    const [openBasic, setOpenBasic] = useState(false);

    return (
        <MDBNavbar fixed="top" expand="sm" light bgColor="light">
            <MDBContainer className="bg-danger">
                <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setOpenBasic(!openBasic)}
                >
                    <MDBIcon icon="bars" fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar open={openBasic} className="bg-success">
                    {/* استخدام d-flex لتوزيع العناصر في صف واحد */}
                    <MDBNavbarNav className="d-flex flex-nowrap justify-content-between w-100 bg-info">
                        <MDBNavbarItem>
                            <MDBNavbarLink active href="#">Products</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href="#">About</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href="#">Contact Us</MDBNavbarLink>
                        </MDBNavbarItem>

                        {/* إضافة عناصر أخرى على نفس الصف */}
                        <MDBNavbarItem>
                            <p>Hello User</p>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink href="#">
                                <MDBBadge pill color="danger">!</MDBBadge>
                                <span>
                                    <MDBIcon fas icon="shopping-cart" />
                                </span>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
