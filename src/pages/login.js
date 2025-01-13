import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPic from '../assets/images/login/login.webp'

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';

import Accordion from 'react-bootstrap/Accordion';


function App() {
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        setTimeout(() => {
            navigate('/register');
        }, 1500);
    };
    return (
        <MDBContainer className='dataForm' style={{ marginTop: "5rem", marginBottom: "1rem" }}>

            <MDBCard className='p-2'>
                <MDBRow >

                    <MDBCol md={6} className='p-4' >
                        <MDBCardImage style={{ maxHeight: '75vh' }} src={LoginPic} alt="login form" className='rounded-start w-100' />
                    </MDBCol>

                    <MDBCol md={6}>
                        <MDBCardBody className='d-flex flex-column dataFields pt-5'>

                            {<div className='d-flex flex-row mt-2'>
                                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                                <span className="h1 fw-bold mb-0">Logo</span>
                            </div>}

                            <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />
                            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />

                            <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
                            <a className="small text-muted text-center" href="#!">Forgot password?</a>
                            <p className="mb-5 pb-lg-2 text-center" style={{ color: '#393f81' }}>Don't have an account? <strong><a href="/register" onClick={handleClick} style={{ color: '#393f81' }}>Register here</a></strong></p>

                        </MDBCardBody>
                    </MDBCol>

                    <MDBRow className='m-auto mb-2'>
                        <MDBCol>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Terms of use.</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </MDBCol>
                    </MDBRow>

                </MDBRow>
            </MDBCard>

        </MDBContainer>
    );
}

export default App;