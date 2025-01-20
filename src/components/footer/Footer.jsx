import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='text-center' color='secondary' bgColor='light'>
            <MDBContainer className='p-4'>
                <section className='mb-4'>
                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#3b5998' }}>
                        <MDBIcon fab icon='facebook-f' size='xl' />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#55acee' }}>
                        <MDBIcon fab icon='twitter' size='xl' />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#dd4b39' }}>
                        <MDBIcon fab icon='google' size='xl' />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#ac2bac' }}>
                        <MDBIcon fab icon='instagram' size='xl' />
                    </MDBBtn>
                </section>

                <section className=''>
                    <form action=''>
                        <MDBRow className='d-flex justify-content-center align-items-center'>
                            <MDBCol size="auto">
                                <p>
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </MDBCol>

                            <MDBCol md='5' start>
                                <MDBInput type='email' label='Email address' className='mb-4  shadow-0 border'  />
                            </MDBCol>

                            <MDBCol size="auto">
                                <MDBBtn outline color='secondary' type='submit' className='mb-4'>
                                    Subscribe
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </section>

                <section className='mb-4'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
                        voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
                        sequi voluptate quas.
                    </p>
                </section>

                <section className=''>
                    <MDBRow>
                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Links</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-secondary'>
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-secondary'>
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-secondary'>
                                        Link 3
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-secondary'>
                                        Link 4
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Links</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-secondary'>
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-secondary'>
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-secondary'>
                                        Link 3
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-secondary'>
                                        Link 4
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Links</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-secondary'>
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-secondary'>
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-secondary'>
                                        Link 3
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-secondary'>
                                        Link 4
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Links</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-secondary'>
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-secondary'>
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-secondary'>
                                        Link 3
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-secondary'>
                                        Link 4
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer>

            <div className='text-center p-3 text-dark' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2025 Copyright:&nbsp;
                <a className='text-white' href='https://mdbootstrap.com/'>
                    &nbsp;AbedSlayman.com
                </a>
            </div>
        </MDBFooter>
    );
}