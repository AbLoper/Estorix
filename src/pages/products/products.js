import React, { useEffect, useState } from 'react';
import Styles from './products.module.css';
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
    MDBBtnGroup,
    MDBIcon,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { addToCart, removeFromCart } from '../../reduxToolkit/slices/cartSlice';
import { useDispatch } from 'react-redux';
import ProductRating from '../../components/product/ProductRating';
import ProductLiking from '../../components/product/ProductLicking';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products')
            .then((response) => {
                const updateResponse = response.data.map((item) => ({
                    ...item,
                    rating: 0, // إضافة تقييم افتراضي
                    liked: false, // إضافة حالة للإعجاب
                }));
                setProducts(updateResponse);
                setLoading(false);
            })
            .catch((err) => {
                setError('Error Fetching Data');
                setLoading(false);
            });
    }, []);

    const filterProducts = () => {
        let filteredProducts = products;

        if (categoryFilter !== 'All') {
            filteredProducts = filteredProducts.filter(item => item.category === categoryFilter);
        }

        if (searchQuery) {
            filteredProducts = filteredProducts.filter(item =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return filteredProducts;
    };

    const navigate = useNavigate();

    const productDetails = (product) => {
        navigate('/product', { state: { product } });
    };

    // عند إضافة المنتج إلى السلة:
    const handleAddToCart = (item) => {
        const serializableItem = JSON.parse(JSON.stringify(item));
        dispatch(addToCart(serializableItem));
    };

    // دالة لتحديث التقييم
    const handleRatingChange = (itemId, newRating) => {
        setProducts((prevProducts) =>
            prevProducts.map((item) =>
                item.id === itemId ? { ...item, rating: newRating } : item
            )
        );
    };

    // دالة لتبديل حالة الإعجاب
    const toggleLike = (itemId) => {
        setProducts((prevProducts) =>
            prevProducts.map((item) =>
                item.id === itemId ? { ...item, liked: !item.liked } : item
            )
        );
    };

    const mapProducts = () => {
        return filterProducts().map((item) => (
            <MDBCol xs="12" md="6" lg="3" key={item.id}>
                <MDBCard>
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
                            onClick={() => productDetails(item)}
                        />
                    </div>
                    <MDBCardBody className='d-flex flex-column' style={{ height: "12rem" }}>
                        <MDBCardTitle>
                            {item.title.length > 35 ? `${item.title.substring(0, 35)}...` : item.title}
                        </MDBCardTitle>
                        <MDBCardText>
                            {item.description.length > 50 ? `${item.description.substring(0, 50)}...` : item.description}
                        </MDBCardText>
                        <p>{item.price}$</p>
                    </MDBCardBody>
                    <div className="rating d-flex flex-row justify-content-between align-items-center mx-3 px-1">
                        <div className="stars">
                            <ProductRating rate={item.rating} onRatingChange={(newRating) => handleRatingChange(item.id, newRating)} />
                        </div>
                        <div className="liking">
                            <ProductLiking liked={item.liked} onLikeChange={() => toggleLike(item.id)} />
                        </div>
                    </div>
                    <MDBBtnGroup className='d-flex justify-content-center align-items-center p-3'>
                        <MDBBtn className='me-1' color='success' outline
                            onClick={() => handleAddToCart(item)}
                        >
                            Add To Cart <MDBIcon fas icon="cart-plus" />
                        </MDBBtn>
                        <MDBBtn className='me-1' color='' outline
                            onClick={() => dispatch(removeFromCart(item))}
                        >
                            <strong>Buy Now</strong>
                        </MDBBtn>
                    </MDBBtnGroup>
                </MDBCard>
            </MDBCol>
        ));
    };

    const handleCategoryClick = (category) => {
        setCategoryFilter(category);
        setSearchQuery('');
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

    const categories = products.length > 0 ? ['All', ...new Set(products.map(product => product.category))] : ['All'];

    return (
        <MDBContainer fluid className='mb-4'>
            <MDBInputGroup tag='form' onSubmit={(e) => e.preventDefault()}>
                <input
                    className='form-control'
                    placeholder='Type query'
                    aria-label='Search'
                    type='Search'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <MDBBtn outline className='mx-1'>Search</MDBBtn>
            </MDBInputGroup>

            <MDBBtnGroup className='d-flex flex-wrap justify-content-center align-items-center gap-1 mt-3'>
                {categories.map((category, index) => (
                    <MDBBtn
                        key={index}
                        outline
                        onClick={() => handleCategoryClick(category)}
                        className={Styles.catagoryBtn}
                    >
                        {category}
                    </MDBBtn>
                ))}
            </MDBBtnGroup>

            <MDBRow className='g-3 mt-0'>
                {mapProducts()}
            </MDBRow>
        </MDBContainer>
    );
};

export default Products;
