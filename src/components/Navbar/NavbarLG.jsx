import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';

export default function NavbarLG() {


    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>



                <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                    <MDBNavbarItem>
                        <MDBNavbarLink active aria-current='page' href='#'>
                            Home
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href='#'>Link</MDBNavbarLink>
                    </MDBNavbarItem>

                    <MDBNavbarItem>
                        <MDBDropdown>
                            <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                Dropdown
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem link>Action</MDBDropdownItem>
                                <MDBDropdownItem link>Another action</MDBDropdownItem>
                                <MDBDropdownItem link>Something else here</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavbarItem>

                    <MDBNavbarItem>
                        <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                            Disabled
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                </MDBNavbarNav>

                <form className='d-flex input-group w-auto'>
                    <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                    <MDBBtn color='primary'>Search</MDBBtn>
                </form>
            </MDBContainer>
        </MDBNavbar>
    );
}