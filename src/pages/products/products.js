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
import ProductLiking from '../../components/product/ProductLiking';

const Products = () => {
    // const getStateItems = useSelector(state => state.cart.items)
    // const [stateItems, setStateItems] = useState([])

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
                const count = 1;
                const updateResponse = response.data.map((item) => {
                    return {
                        ...item,
                        count: count,
                        total: count * +item.price,
                        added: false
                    }
                });
                setProducts(updateResponse);
                setLoading(false);
            })
            .catch((err) => {
                setError('Error Fetching Data');
                setLoading(false);
            });

    }, []);

    // const btnStyleSet = (value) => {
    //     setStateItems(prevState => {
    //         const updatedItems = [...prevState, value];
    //         return updatedItems;
    //     });
    // };

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
        // التحقق من أن item لا يحتوي على دوال أو مراجع غير قابلة للتسلسل
        const serializableItem = JSON.parse(JSON.stringify(item)); // تحويل الكائن إلى JSON ثم إعادته إلى كائن

        dispatch(addToCart(serializableItem));
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
                    <MDBCardBody className='d-flex flex-column'>
                        <MDBCardTitle>
                            {item.title.length > 35 ? `${item.title.substring(0, 35)}...` : item.title}
                        </MDBCardTitle>
                        <MDBCardText>
                            {item.description.length > 50 ? `${item.description.substring(0, 50)}...` : item.description}
                        </MDBCardText>
                        <p>{item.price}$</p>
                    </MDBCardBody>
                    <div className="rating d-flex flex-row justify-content-between align-items-end mx-3 px-2">
                        <div className="stars">
                            <ProductRating rate='4' />
                        </div>
                        <div className="liking">
                            <ProductLiking />
                        </div>
                    </div>
                    <MDBBtnGroup className='d-flex justify-content-center align-items-center p-3'>
                        <MDBBtn className='me-1' color='success' outline
                            onClick={() => {
                                handleAddToCart(item); // استخدام الطريقة الجديدة
                            }}
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
