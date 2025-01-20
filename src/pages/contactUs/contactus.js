import React, { useState } from 'react';
import {
    MDBInputGroup,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleCancel = () => {
        window.location.href = '/';
    };

    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{marginTop:"5rem"}}>
            <h3 className='my-4'>Contact Us</h3>
            <form onSubmit={handleSubmit} className='w-75'>
                <MDBInputGroup className='mb-3 bg-secondary' noBorder textBefore={<MDBIcon color='light' fas icon='user' />}>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Username'
                        name='username'
                        value={formData.username}
                        onChange={handleChange}
                    />
                </MDBInputGroup>

                <MDBInputGroup className='mb-3 bg-secondary' noBorder textBefore={<MDBIcon color='light' fas icon='envelope' />}>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </MDBInputGroup>

                <MDBInputGroup className='mb-3'>
                    <textarea
                        className='form-control'
                        placeholder='Message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        style={{
                            resize: 'none',
                            height: '120px'
                        }}
                    />
                </MDBInputGroup>

                <MDBBtn type='submit' className='mr-1'>Submit</MDBBtn>
                <MDBBtn type='button' className='mx-1'  onClick={handleCancel} color="secondary">Cancel</MDBBtn>
            </form>
        </div>
    );
}
