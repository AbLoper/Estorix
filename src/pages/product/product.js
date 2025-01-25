import React from 'react';
import {
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtnGroup,
  MDBIcon,
  MDBCard
} from 'mdb-react-ui-kit';
import Styles from './product.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { removeFromCart } from '../../reduxToolkit/slices/cartSlice';
import { useDispatch } from 'react-redux';
import ProductRating from '../../components/product/ProductRating';
import ProductLiking from '../../components/product/ProductLiking';

export default function Product() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const item = location.state?.product;

  if (!item) {
    return <div>Product not found</div>;
  }

  const backward = () => {
    navigate(-1);
  }
  return (
    <MDBContainer>
      <MDBRow id={Styles.row} className='d-flex justify-content-center align-items-center align-items-stretch gap-4 mb-3'>
        <MDBCol xs='12' lg='6' className='d-flex justify-content-center align-items-center'>
          {item.image ? (
            <MDBCard id={Styles.card} className='d-flex justify-content-center align-items-center'>
              <MDBCardImage
              id={Styles.cardImage}
                src={item.image}
                alt="..."
                position="top"
              />
            </MDBCard>
          ) : (
            <div>Image not available</div>
          )}
        </MDBCol>
        <MDBCol className='d-flex justify-content-center align-items-center'>
          <MDBCardBody>
            <MDBCardText>{item.category}</MDBCardText>
            <MDBCardTitle><strong>{item.title}</strong></MDBCardTitle>
            <MDBCardText id={Styles.description} className='my-3'>{item.description}</MDBCardText>
            <MDBCardText className='my-5'>
              <strong>{item.price}$</strong>
            </MDBCardText>
            <div className="rating d-flex flex-row justify-content-between align-items-center my-2">
              <div className="stars">
                <ProductRating rate='5' />
              </div>
              <div className="liking">
                <ProductLiking />
              </div>
            </div>
            <MDBBtnGroup shadow="0" aria-label="Basic example" size="sm" className='d-flex gap-1'>
              <MDBBtn color="secondary" outline
                onClick={() => dispatch(removeFromCart(item))}>Add To Cart <MDBIcon fas icon="cart-plus" /></MDBBtn>
              <MDBBtn color="info" outline>Buy Now</MDBBtn>
              <MDBBtn color="primary" outline onClick={backward}>
                <MDBIcon fas icon="angle-left" />
              </MDBBtn>
            </MDBBtnGroup>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}