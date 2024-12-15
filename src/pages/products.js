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
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [categoryFilter, setCategoryFilter] = useState('All'); // حالة الفئة
    const [searchQuery, setSearchQuery] = useState(''); // النص المدخل في خانة البحث

    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products')
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Error Fetching Data');
                setLoading(false);
            });
    }, []);

    // دالة التقييم (التنجيم)
    const evaluate = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <StarBorderIcon key={i} style={{ fontSize: 25, color: 'gold' }} />
            );
        }
        return stars;
    };

    // تصفية المنتجات بناءً على الفئة والبحث
    const filterProducts = () => {
        let filteredProducts = products;

        // تصفية الفئة
        if (categoryFilter !== 'All') {
            filteredProducts = filteredProducts.filter(item => item.category === categoryFilter);
        }

        // تصفية البحث
        if (searchQuery) {
            filteredProducts = filteredProducts.filter(item => 
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                item.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return filteredProducts;
    };

    const mapProducts = () => {
        return filterProducts().map((item) => (
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
                        <MDBCardTitle>
                            {item.title.length > 35 ? `${item.title.substring(0, 35)}...` : item.title}
                        </MDBCardTitle>
                        <MDBCardText>
                            {item.description.length > 50 ? `${item.description.substring(0, 50)}...` : item.description}
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
        ));
    };

    // عند الضغط على زر الفئة
    const handleCategoryClick = (category) => {
        setCategoryFilter(category);
        setSearchQuery(''); // مسح النص في خانة البحث عند اختيار فئة
    };

    if (error) {
        return (
            <div>
                <h1 style={{ textAlign: 'center', backgroundColor: 'red', color: '#fff' }} >
                    {error}
                </h1>
                <MDBBtn onClick={() => setLoading(true)}>Retry</MDBBtn>
            </div>
        );
    }

    if (loading) {
        return <h1>Loading...</h1>;
    }

    // استخراج الفئات الفريدة من المنتجات
    const categories = ['All', ...new Set(products.map(product => product.category))];

    return (
        <MDBContainer className='mb-4'>
            <MDBInputGroup tag='form' onSubmit={(e) => e.preventDefault()}>
                <input
                    className='form-control'
                    placeholder='Type query'
                    aria-label='Search'
                    type='Search'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} // تحديث البحث بناءً على النص المدخل
                />
                <MDBBtn outline className='mx-1'>Search</MDBBtn>
            </MDBInputGroup>

            <div className='d-flex flex-wrap justify-content-center align-items-center gap-1 mt-3'>
                {categories.map((category, index) => (
                    <MDBBtn 
                        key={index} 
                        color='secondary' 
                        outline 
                        onClick={() => handleCategoryClick(category)} 
                        className={Styles.catagoryBtn}
                    >
                        {category}
                    </MDBBtn>
                ))}
            </div>

            <MDBRow className='g-3 mt-0'>
                {mapProducts()}
            </MDBRow>
        </MDBContainer>
    );
};

export default Products;
