import { MDBBtn, MDBBtnGroup, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdb-react-ui-kit";
import Styles from './cart.module.css'
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../reduxToolkit/slices/cartSlice";

export default function Cart() {
    const dispatch = useDispatch()

    const cartItems = useSelector(state => state.cart.items)
    console.log(cartItems);

    return (
        <MDBContainer style={{ marginTop: "10rem" }} className={`${Styles.container} text-light`}>
            <MDBRow className={`${Styles.productQuantity} d-flex gap-1`}>
                {
                    cartItems.map((item) => {
                        return (
                            <MDBCardBody className={`${Styles.cardBody} d-flex flex-column gap-3`}>
                                <MDBCardText>{item.category}</MDBCardText>
                                <MDBCardTitle>{item.title}</MDBCardTitle>
                                <MDBCardText className={Styles.cardText}>{item.description}</MDBCardText>
                                <p>{item.price}$</p>
                                <MDBBtnGroup shadow="0" aria-label="Basic example" size="sm" className={`${Styles.btnGroup} w-100 gap-1`}>
                                    <MDBBtn color="secondary" outline
                                        onClick={() => dispatch(removeFromCart(item))}>
                                        +
                                    </MDBBtn>
                                    <MDBBtn color="info" outline>
                                        -
                                    </MDBBtn>
                                    <MDBBtn color="primary" outline
                                    // onClick={backward}
                                    >
                                        <MDBIcon fas icon="angle-left" />
                                    </MDBBtn>
                                </MDBBtnGroup>
                            </MDBCardBody>
                        )
                    })
                }
                <MDBCol sm={12} md={4} xl={4} className="text-center bg-success">
                    Hello From Cart
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}