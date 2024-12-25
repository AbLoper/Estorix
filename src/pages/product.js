import { MDBBtn, MDBBtnGroup, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBIcon, MDBRow } from 'mdb-react-ui-kit';
import Styles from '../styles/product.module.css'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Product() {

  const location = useLocation();
  const item = location.state?.product;

  const navigate = useNavigate()
  const backward = () => {
    navigate(-1)
  }

  return (
    <MDBContainer fluid className={Styles.container}>
      <MDBRow className={`${Styles.shadowBorder} bg-light d-flex flex-row jusify-content-center align-items-center p-3`}>

        <MDBCol md="6" className="d-flex justify-content-center align-items-center">
          <MDBCardImage
            className={`${Styles.itemImage} ${Styles.shadowBorder}`}
            src={item.image}
            alt="..."
            position="top"
            style={{
              padding: "1rem",
            }}
          />
        </MDBCol>

        <MDBCol md="6" className='p-4'>
          <MDBCardBody className={`${Styles.cardBody} d-flex flex-column gap-3`}>
            <MDBCardText>
              {item.category}
            </MDBCardText>
            <MDBCardTitle>
              {item.title}
            </MDBCardTitle>
            <MDBCardText className={Styles.cardText}>
              {item.description}
            </MDBCardText>
            <p>{item.price}$</p>
            <div className="evaluation d-flex flex-row justify-content-between align-items-end mx-3 px-2">
              <div className="stars">
                {/* {evaluate(item.rating)} */}
              </div>
              <div className="favorite">
                {/* <ThumbUpOffAltIcon style={{ fontSize: 25, color: 'red' }} /> */}
              </div>
            </div>
            <MDBBtnGroup shadow="0" aria-label="Basic example" size="sm" className={`${Styles.btnGroup} w-100 gap-1`}>
              <MDBBtn color="secondary" outline>
                Add To Cart
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
  )
}
