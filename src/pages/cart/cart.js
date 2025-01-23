import { MDBBtn, MDBBtnGroup, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdb-react-ui-kit";
import Styles from './cart.module.css';
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
        <MDBContainer fluid style={{ marginTop: "10rem", border: "1px solid" }} className={`${Styles.container} text-dark`}>
            <MDBRow className={`${Styles.productQuantity} d-flex justify-content-center align-items-center`}>
                {
                    cartItems.map((item, index) => {
                        const itemTotal = item.price * item.quantity; // حساب مجموع كل منتج
                        return (
                            <MDBCol xs='12' lg='8' key={item.id} className="d-flex justify-content-between">
                                {item.image ? (
                                    <MDBCard id={Styles.card} className='d-flex justify-content-center align-items-center'>
                                        <MDBCardImage
                                            id={Styles.cardImage}
                                            src={item.image}
                                            alt="..."
                                            position="top"
                                            height="50%"
                                        />
                                    </MDBCard>
                                ) : (
                                    <div>Image not available</div>
                                )}
                                <MDBCardBody className={`${Styles.cardBody} d-flex flex-column gap-3`}>
                                    <MDBCardText>{item.category}</MDBCardText>
                                    <MDBCardTitle>{item.title}</MDBCardTitle>
                                    {/* <MDBCardText className={Styles.cardText}>{item.description}</MDBCardText> */}
                                    <p>{item.price}$</p>

                                    {/* عرض الكمية مع المجموع لكل منتج */}
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Total for this item: ${itemTotal.toFixed(2)}</p> {/* عرض المجموع الخاص بكل منتج */}

                                    <MDBBtnGroup shadow="0" aria-label="Basic example" size="sm" className={`${Styles.btnGroup} w-100 gap-1`}>
                                        {/* زر لزيادة الكمية */}
                                        <MDBBtn color="success" outline onClick={() => dispatch(incrementItem(item))}>+</MDBBtn>
                                        {/* زر لتقليص الكمية */}
                                        <MDBBtn color="danger" outline onClick={() => dispatch(decrementItem(item))}>-</MDBBtn>
                                    </MDBBtnGroup>

                                    <MDBBtn color="secondary" outline onClick={() => dispatch(removeFromCart(item))}>
                                        Remove
                                    </MDBBtn>
                                </MDBCardBody>
                            </MDBCol>
                        );
                    })
                }
                {/* </MDBRow> */}

                {/* عرض عدد المنتجات المختارة ومجموع السعر */}
                {/* <MDBRow className="mt-3"> */}
                <MDBCol xs='12' lg='4' className="text-center">
                    <h4>Total Items: {totalQuantity}</h4>
                    <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}