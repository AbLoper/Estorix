import { MDBBtn, MDBBtnGroup, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBIcon, MDBRow } from 'mdb-react-ui-kit';
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
    <MDBContainer className={Styles.container}>
      <MDBRow className='vh-100'>
        <MDBCol md="6" className='d-flex justify-content-center align-items-center' style={{ height: '100%' }}>
          {item.image ? (
            <MDBCardImage
              src={item.image}
              alt="..."
              position="top"
            />
          ) : (
            <div>Image not available</div>
          )}
        </MDBCol>

        <MDBCol md="6" className='d-flex align-items-center bg-info'>
          <MDBCardBody>
            <MDBCardText>{item.category}</MDBCardText>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardText>{item.description}</MDBCardText>
            <p>{item.price}$</p>
            <div className="rating d-flex flex-row justify-content-between">
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
  );
}
