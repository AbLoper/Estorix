import React, { useEffect, useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Styles from '../styles/products.module.css';


import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInputGroup,
    MDBBtn,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';
import axios from 'axios';

const Products = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products')
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Error Fetching Data');
                setLoading(false);
            });
    }, []);

    const evaluate = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <StarBorderIcon style={{ fontSize: 25, color: 'gold' }} />
            );
        }
        return stars;
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // searching logic
    };

    if (error) {
        return (
            <div>
                <h1 style={{ textAlign: 'center', backgroundColor: 'red', color: '#fff' }}>
                    {error}
                </h1>
                <MDBBtn onClick={() => setLoading(true)}>Retry</MDBBtn>
            </div>
        );
    }

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <MDBContainer className='mb-4'>
            <MDBInputGroup tag='form' onSubmit={handleSearchSubmit}>
                <input
                    className='form-control'
                    placeholder='Type query'
                    aria-label='Search'
                    type='Search'
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <MDBBtn outline className='mx-1'>Search</MDBBtn>
            </MDBInputGroup>

            <div className='d-flex flex-wrap justify-content-center align-items-center gap-1 mt-3'>
                <MDBBtn color='secondary' outline className={Styles.catagoryBtn}>
                    All
                </MDBBtn>-
                <MDBBtn color='secondary' outline className={Styles.catagoryBtn}>
                    Mens
                </MDBBtn>
                <MDBBtn color='secondary' size outline className={Styles.catagoryBtn}>
                    Womens
                </MDBBtn>
                <MDBBtn color='secondary' outline className={Styles.catagoryBtn}>
                    Jewelery
                </MDBBtn>
                <MDBBtn color='secondary' outline className={Styles.catagoryBtn}>
                    Sports
                </MDBBtn>
                {<MDBBtn color='secondary' outline className={Styles.catagoryBtn}>
                    electronics
                </MDBBtn>}
            </div>

            {<MDBRow className='g-3 mt-0'>
                {data.map((item) => (
                    <MDBCol key={item.id} xs="12" md="6" lg="3">
                        <MDBCard style={{ height: '100%' }}>
                            <div className='d-flex justify-content-center'>
                                <MDBCardImage
                                    className={Styles.shadowBorder}
                                    src={item.image}
                                    alt='...'
                                    position='top'
                                    style={{
                                        width: '85%',
                                        objectFit: 'contain',
                                        height: '20rem',
                                        marginTop: '1rem',
                                    }}
                                />
                            </div>
                            <MDBCardBody className='d-flex flex-column'>
                                <MDBCardTitle>{item.title}</MDBCardTitle>
                                <MDBCardText>
                                    {item.description.length > 100 ? `${item.description.substring(0, 100)}...` : item.description}
                                </MDBCardText>
                                <p>{item.price}$</p>
                            </MDBCardBody>
                            <div className="evaluation d-flex flex-row justify-content-around align-items-end p-3">
                                <div className="stars">
                                    {evaluate(item.rating)}
                                </div>
                                <div className="favorite">
                                    <ThumbUpOffAltIcon style={{ fontSize: 25, color: 'red' }} />
                                </div>
                            </div>
                            <div className='d-flex justify-content-center align-items-center mb-3'>
                                <MDBBtn className='me-1'>
                                    Buy Now
                                </MDBBtn>
                                <MDBBtn className='me-1' color='secondary'>
                                    Add To Cart
                                </MDBBtn>
                            </div>
                        </MDBCard>
                    </MDBCol>
                ))}
            </MDBRow>}
        </MDBContainer>
    );
};

export default Products;
