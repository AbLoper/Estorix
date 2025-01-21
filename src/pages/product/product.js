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
  MDBIcon
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
    <MDBContainer className='d-flex align-items-center'>
      <MDBRow className='d-flex justify-content-center align-items-center' id={Styles.row}>
        <MDBCol sm={12} md={6} className='d-flex justify-content-center align-items-center'>
          {item.image ? (
            <MDBCardImage id={Styles.cardImage}
              src={item.image}
              alt="..."
              position="top"
            />
          ) : (
            <div>Image not available</div>
          )}
        </MDBCol>
        <MDBCol sm={12} md={6} className='d-flex justify-content-center align-items-center'>
          <MDBCardBody className={Styles.cardBody}>
            <MDBCardText>{item.category}</MDBCardText>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardText>{item.description}</MDBCardText>
            <p>{item.price}$</p>
            <div className="rating d-flex flex-row justify-content-between align-items-center my-3">
              <div className="stars">
                <ProductRating rate='4' />
              </div>
              <div className="liking">
                <ProductLiking />
              </div>
            </div>
            <MDBBtnGroup shadow="0" aria-label="Basic example" size="sm" className='d-flex gap-1'>
              <MDBBtn color="secondary" outline
                onClick={() => dispatch(removeFromCart(item))}>Add To Cart</MDBBtn>
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
}   // جعل الصورة تأخذ كامل عرض الـ MDBCol