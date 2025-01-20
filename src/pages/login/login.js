import React from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../../assets';

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput,
    MDBAccordionItem,
    MDBAccordion
}
    from 'mdb-react-ui-kit';

export default function Login() {
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
                        <MDBCardImage style={{ maxHeight: '75vh' }} src={assets.LoginPic} alt="login form" className='rounded-start w-100' />
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
                            <MDBAccordion initialActive={1}>
                                <MDBAccordionItem collapseId={1} headerTitle='Accordion Item #1'>
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                                    plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                                    custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                                    within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </MDBAccordionItem>
                            </MDBAccordion>
                        </MDBCol>
                    </MDBRow>

                </MDBRow>
            </MDBCard>

        </MDBContainer>
    );
}