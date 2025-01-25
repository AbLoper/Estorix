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
        <MDBContainer fluid id={Styles.container}>
            <MDBRow id={Styles.row1} className='text-dark d-flex'>
                {
                    cartItems.map((item, index) => {
                        const itemTotal = item.price * item.quantity;
                        return (
                            <MDBCol xs={12} lg={8} id={Styles.col1} key={item.id} className="d-flex justify-content-center align-items-center p-2">
                                <MDBCard id={Styles.card} className='d-flex w-100'>
                                    {item.image ? (
                                        <MDBCardImage
                                            id={Styles.cardImage}
                                            src={item.image}
                                            alt="..."
                                            position="top"
                                            style={{
                                                // width: '85%',
                                                objectFit: 'contain',
                                                height: '15vh',
                                                marginTop: '1rem',
                                                // marginLeft:"auto",
                                                // marginRight:"0",
                                                // display: 'block'
                                            }}
                                        />
                                    ) : (
                                        <div>Image not available</div>
                                    )}
                                    <MDBCardBody id={Styles.cardBody} className='d-flex flex-column'>
                                        <MDBCardText>{item.category}</MDBCardText>
                                        <MDBCardTitle>{item.title}</MDBCardTitle>
                                        <p>{item.price}$</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Total for this item: ${itemTotal.toFixed(2)}</p>

                                        <MDBBtnGroup shadow="0" aria-label="Basic example" size="sm" className="gap-1">
                                            <MDBBtn color="danger" outline onClick={() => dispatch(decrementItem(item))}><MDBIcon fas icon="minus" /></MDBBtn>
                                            <MDBBtn color="success" outline onClick={() => dispatch(incrementItem(item))}><MDBIcon fas icon="plus" /></MDBBtn>
                                        </MDBBtnGroup>

                                        <MDBBtn color="secondary" className="my-1" size="sm" outline onClick={() => dispatch(removeFromCart(item))}>
                                            Remove <MDBIcon fas icon="trash-alt" />
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        );
                    })
                }
            </MDBRow>

            {/* عرض عدد المنتجات المختارة ومجموع السعر في الأعلى */}

            <MDBRow>
                <MDBCol xs={12} lg={4} id={Styles.col2} className="position-fixed my-2">
                    <MDBCard id={Styles.card} className="d-flex align-items-center text-dark h-100">
                            <img src={assets.logos.CartLogo} alt="cartLogo" className="w-50 my-5" />
                        <div>
                            <h4>Total Items: {totalQuantity}</h4>
                            <h4>Total Price : {totalPrice.toFixed(2)}$</h4>
                        </div>
                        <div className="d-flex justify-content-center gap-1 mt-2">
                            <MDBBtn size="sm" color="danger">Cancel Cart <MDBIcon fas icon="minus-square" /></MDBBtn>
                            <MDBBtn size="sm" outline color="success">Checkout <MDBIcon far icon="credit-card" /></MDBBtn>
                        </div>
                        <h2>Page Not Responsive</h2>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}