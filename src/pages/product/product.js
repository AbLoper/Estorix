import React, { useState } from 'react'; // تأكد من استيراد useState بشكل صحيح
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
import ProductLiking from '../../components/product/ProductLicking';

export default function Product() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const item = location.state?.product;

  // تأكد من وضع استخدام useState قبل أي شرط أو return
  const [rating, setRating] = useState(item?.rating || 0); // تعيين التقييم الافتراضي من المنتج
  const [isLiked, setIsLiked] = useState(false); // حالة الإعجاب

  if (!item) {
    return <div>Product not found</div>;
  }

  // دالة لتحديث التقييم
  const handleRatingChange = (newRating) => {
    setRating(newRating);
    console.log('New rating:', newRating); // يمكن إرسال التقييم إلى الخادم أو تخزينه
  };

  // دالة لتحديث حالة الإعجاب
  const handleLikeChange = (newLikedState) => {
    setIsLiked(newLikedState);
    console.log('Product is liked:', newLikedState); // يمكن إرسال التغيير إلى الخادم أو تخزينه
  };

  const backward = () => {
    navigate(-1);
  };

  return (
    <MDBContainer>
      <MDBRow id={Styles.row} className="d-flex justify-content-center align-items-center align-items-stretch gap-4 mb-3">
        <MDBCol xs="12" lg="6" className="d-flex justify-content-center align-items-center">
          {item.image ? (
            <MDBCard id={Styles.card} className="d-flex justify-content-center align-items-center">
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
        <MDBCol className="d-flex justify-content-center align-items-center">
          <MDBCardBody>
            <MDBCardText>{item.category}</MDBCardText>
            <MDBCardTitle>
              <strong>{item.title}</strong>
            </MDBCardTitle>
            <MDBCardText id={Styles.description} className="my-3">
              {item.description}
            </MDBCardText>
            <MDBCardText className="my-5">
              <strong>{item.price}$</strong>
            </MDBCardText>

            {/* التقييم */}
            <div className="rating d-flex flex-row justify-content-between align-items-center my-2">
              <div className="stars">
                <ProductRating rate={rating} onRatingChange={handleRatingChange} />

              </div>
              {/* الإعجاب */}
              <div className="liking">
                <ProductLiking isLiked={isLiked} onLikeChange={handleLikeChange} />
              </div>
            </div>

            <MDBBtnGroup shadow="0" aria-label="Basic example" size="sm" className="d-flex gap-1">
              <MDBBtn color="secondary" outline onClick={() => dispatch(removeFromCart(item))}>
                Add To Cart <MDBIcon fas icon="cart-plus" />
              </MDBBtn>
              <MDBBtn color="info" outline>
                Buy Now
              </MDBBtn>
              <MDBBtn color="primary" outline onClick={backward}>
                <MDBIcon fas icon="angle-left" />
              </MDBBtn>
            </MDBBtnGroup>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
