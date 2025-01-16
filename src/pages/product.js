import { MDBBtn, MDBBtnGroup, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBIcon, MDBRow } from 'mdb-react-ui-kit';
import Styles from './css/product.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

import { removeFromCart } from '../reduxToolkit/slices/cartSlice';
import { useDispatch } from 'react-redux';

export default function Product() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  // تأكد من أن الـ item موجود في location.state
  const item = location.state?.product;

  // إذا لم يكن هناك item في الـ state، يمكنك إعادة توجيه المستخدم أو عرض رسالة خطأ
  if (!item) {
    return <div>Product not found</div>;
  }

  const backward = () => {
    navigate(-1); // العودة إلى الصفحة السابقة
  }

  return (
    <MDBContainer fluid className={Styles.container}>
      <MDBRow className={`${Styles.shadowBorder} bg-light d-flex flex-row justify-content-center align-items-center p-3`}>
        <MDBCol md="6" className="d-flex justify-content-center align-items-center">
          {/* تأكد من وجود صورة قبل عرضها */}
          {item.image ? (
            <MDBCardImage
              className={`${Styles.itemImage} ${Styles.shadowBorder}`}
              src={item.image}
              alt="..."
              position="top"
              style={{
                padding: "1rem",
              }}
            />
          ) : (
            <div>Image not available</div>
          )}
        </MDBCol>

        <MDBCol md="6" className='p-4'>
          <MDBCardBody className={`${Styles.cardBody} d-flex flex-column gap-3`}>
            <MDBCardText>{item.category}</MDBCardText>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardText className={Styles.cardText}>{item.description}</MDBCardText>
            <p>{item.price}$</p>
            <div className="evaluation d-flex flex-row justify-content-between align-items-end mx-3 px-2">
              <div className="stars">
                {/* يمكن إضافة تقييم المنتج هنا */}
              </div>
              <div className="favorite">
                {/* يمكن إضافة الأيقونة هنا */}
              </div>
            </div>
            <MDBBtnGroup shadow="0" aria-label="Basic example" size="sm" className={`${Styles.btnGroup} w-100 gap-1`}>
              <MDBBtn color="secondary" outline
                onClick={() => dispatch(removeFromCart(item))}
              >Add To Cart</MDBBtn>
              <MDBBtn color="info" outline>Buy Now</MDBBtn>
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
