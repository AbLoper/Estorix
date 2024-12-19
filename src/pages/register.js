import React from 'react';
import Styles from '../styles/register.module.css'
import { useNavigate } from 'react-router-dom';

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

export default function Register() {
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        setTimeout(() => {
            navigate('/login');
        }, 1500);
    };
    return (
        <MDBContainer  className='dataForm' style={{marginTop:"5rem"}}>

            <MDBRow className='align-items-center'>

                <MDBCol col='6'>

                    <MDBCard className={Styles.cascadingRight} style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
                        <MDBCardBody className='p-4 shadow-5 text-center'>

                            <h2 className={`${Styles.title} fw-bold mb-4`}>Sign up now</h2>

                            <MDBRow>
                                <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' />
                                </MDBCol>

                                <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' />
                                </MDBCol>
                            </MDBRow>

                            <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' />
                            <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' />

                            <div className='d-flex justify-content-center mb-4'>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                            </div>

                            <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

                            <div className="text-center">

                                <p>or sign up with:</p>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='facebook-f' size="lg" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='twitter' size="lg" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='google' size="lg" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='github' size="lg" />
                                </MDBBtn>

                            </div>

                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

            </MDBRow>

            <MDBCol>
                <p className="my-3 pb-lg-2 text-center" style={{ color: '#393f81' }}>Already have an account? <strong><a href="/login" onClick={handleClick} style={{ color: '#393f81' }}>login here</a></strong></p>
            </MDBCol>

        </MDBContainer>
    );
}