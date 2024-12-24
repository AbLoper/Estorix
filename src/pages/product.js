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
      <MDBRow className={`${Styles.row} ${Styles.shadowBorder} bg-light`}>

        <MDBCol className={Styles.product}>
          <MDBCardImage
            className={`${Styles.itemImage} ${Styles.shadowBorder}`}
            src={item.image}
            alt='...'
          />
        </MDBCol>

        <MDBCol className={Styles.details}>
          <MDBCardBody className={Styles.cardBody}>
            <MDBCardText>
              {item.category}
            </MDBCardText>
            <MDBCardTitle className={Styles.cardTitle}>
              {item.title}
            </MDBCardTitle>
            <MDBCardText className={Styles.cartText}>
              {item.description}
            </MDBCardText>
            <p>{item.price}$</p>

            <MDBBtnGroup shadow='0' aria-label='Basic example' size='sm' className={`${Styles.btnGroup} w-100 gap-1`}>
              <MDBBtn color='secondary' outline>
                Add To Cart
              </MDBBtn>

              <MDBBtn color='info' outline>
                Buy Now
              </MDBBtn>
              <MDBBtn color='primary' outline onClick={backward}>
                <MDBIcon fas icon="angle-left" />
              </MDBBtn>

            </MDBBtnGroup>

          </MDBCardBody>

        </MDBCol>

      </MDBRow>
    </MDBContainer>

  )
}