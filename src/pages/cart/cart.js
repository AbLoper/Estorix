import { MDBBtn, MDBBtnGroup, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdb-react-ui-kit";
import Styles from './cart.module.css';
import assets from '../../assets'
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, incrementItem, decrementItem } from "../../reduxToolkit/slices/cartSlice";

export default function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    // حساب العدد الإجمالي للمنتجات المختارة
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    // حساب مجموع السعر بناءً على الكمية
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <MDBContainer id={Styles.container}>
            <MDBRow className="d-flex gap-2">
                {
                    cartItems.map((item, index) => {
                        const itemTotal = item.price * item.quantity;
                        return (
                            <MDBCol xs={12} lg={8}>

                                <MDBCard id={Styles.card} className="d-flex flex-column">
                                    <div className="d-flex">
                                        {item.image ? (
                                            <MDBCardImage
                                                src={item.image}
                                                alt="..."
                                                position="top"
                                                style={{
                                                    objectFit: 'contain',
                                                    maxWidth: "25vh",
                                                    maxHeight: '25vh',
                                                    padding: "1rem"
                                                }}
                                            />
                                        ) : (
                                            <div>Image not available</div>
                                        )}
                                        <MDBCardBody>
                                            <MDBCardText>{item.category}</MDBCardText>
                                            <MDBCardTitle>{item.title}</MDBCardTitle>
                                            <p><strong>{item.price}$</strong></p>
                                        </MDBCardBody>
                                    </div>

                                    <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-evenly gap-2 mb-3">
                                        <div className="d-flex justify-content-center align-items-center gap-2">
                                            <p style={{
                                                marginTop: "0",
                                                marginBottom: "0"
                                            }}>Quantity: <strong>{item.quantity}</strong></p>

                                            <MDBBtnGroup shadow="0" aria-label="Basic example" size="sm" className="gap-1">
                                                <MDBBtn color="danger" outline onClick={() => dispatch(decrementItem(item))}><MDBIcon fas icon="minus" /></MDBBtn>
                                                <MDBBtn color="success" outline onClick={() => dispatch(incrementItem(item))}><MDBIcon fas icon="plus" /></MDBBtn>
                                            </MDBBtnGroup>
                                        </div>

                                        <div className="d-flex justify-content-center align-items-center gap-2">
                                            <p style={{
                                                marginTop: "0",
                                                marginBottom: "0"
                                            }}>Total for this item: <strong>${itemTotal.toFixed(2)}</strong></p>

                                            <MDBBtn color="secondary" size="sm" outline onClick={() => dispatch(removeFromCart(item))}>
                                                Remove <MDBIcon fas icon="trash-alt" />
                                            </MDBBtn>
                                        </div>
                                    </div>
                                </MDBCard>
                            </MDBCol>
                        );
                    })
                }

                <MDBCol>
                    <MDBCard id={Styles.card} className="flex-column p-5">
                        <div className="d-flex justify-content-evenly align-items-center">
                            <img src={assets.logos.CartLogo} loading="lazy" alt="cartLogo" style={{
                                objectFit: 'contain',
                                maxWidth: "25vh",
                                maxHeight: '25vh',
                                padding: "1rem"
                            }} />
                            <div>
                                <h4>Total Items: <strong>{totalQuantity}</strong></h4>
                                <h4>Total Price : <strong>{totalPrice.toFixed(2)}$</strong></h4>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center gap-1 mt-2">
                            <MDBBtn size="sm" color="danger" className="flex-grow-1">Cancel Cart <MDBIcon fas icon="minus-square" /></MDBBtn>
                            <MDBBtn size="sm" outline color="success" className="flex-grow-1">Checkout <MDBIcon far icon="credit-card" /></MDBBtn>
                        </div>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}