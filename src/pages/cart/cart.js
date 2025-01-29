import { MDBBtn, MDBBtnGroup, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdb-react-ui-kit";
import Styles from './cart.module.css';
import assets from '../../assets';
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, incrementItem, decrementItem, cancelCart } from "../../reduxToolkit/slices/cartSlice";
import { showAsyncToast } from '../../utils/tosater_library/toast_ItemRemoved';  // استيراد الدالة
import { Toaster } from "react-hot-toast";
import ItemsSlider from "../../components/slider/Slider";
import { useNavigate } from "react-router";

export default function Cart() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const cartItems = useSelector(state => state.cart.items);

    // دالة لمعالجة حذف العنصر
    const handleRemoveItem = async (item) => {
        // عرض إشعار عند إجراء العملية غير المتزامنة
        await showAsyncToast();
        dispatch(removeFromCart(item));
    };

    // حساب العدد الإجمالي للمنتجات المختارة
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    let shippingPrice = 0
    let totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

    if (totalQuantity > 0) {
        shippingPrice = 30
        totalPrice += shippingPrice
    }

    const handleCancelCart = () => {
        dispatch(cancelCart())
        setTimeout(() => {
            navigate('/')
        }, 1500)
    }

    const handleCheckout = () => {
        setTimeout(() => {
            navigate('/checkout')
        }, 1500);
    }


    return (
        <MDBContainer fluid id={Styles.container}>
            <MDBRow>
                {
                    cartItems.map((item, index) => {
                        const itemTotal = item.price * item.quantity;
                        return (
                            <MDBCol xs={12} lg={7} key={index}>
                                <MDBCard className={`${Styles.card} d-flex flex-column m-1`}>
                                    <div className="d-flex justify-content-center align-items-center">
                                        {item.image ? (
                                            <MDBCardImage
                                                src={item.image}
                                                alt="..."
                                                position="top"
                                                style={{
                                                    objectFit: 'contain',
                                                    maxWidth: "15vh",
                                                    maxHeight: '15vh',
                                                    margin: "1rem"
                                                }}
                                            />
                                        ) : (
                                            <div>Image not available</div>
                                        )}
                                        <MDBCardBody>
                                            {item.title.length > 35 ? `${item.title.substring(0, 35)}...` : item.title}
                                            <p><strong>{item.price}$</strong></p>
                                        </MDBCardBody>
                                    </div>

                                    <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-evenly mb-3">
                                        <div className="d-flex justify-content-center align-items-center gap-2">
                                            <p style={{
                                                marginTop: "0",
                                                marginBottom: "0",
                                            }}>Quantity: <strong>{item.quantity}</strong></p>

                                            <MDBBtnGroup shadow="0" aria-label="Basic example" size="sm" className="gap-1">
                                                <MDBBtn color="danger" outline onClick={() => dispatch(decrementItem(item))}><MDBIcon fas icon="minus" /></MDBBtn>
                                                <MDBBtn color="success" outline onClick={() => dispatch(incrementItem(item))}><MDBIcon fas icon="plus" /></MDBBtn>
                                            </MDBBtnGroup>
                                        </div>

                                        <div className="d-flex justify-content-center align-items-center gap-2 mt-3 mt-lg-0">
                                            <p style={{
                                                marginTop: "0",
                                                marginBottom: "0"
                                            }}>Total for this item: <strong>${itemTotal.toFixed(2)}</strong></p>

                                            <MDBBtn
                                                color="secondary"
                                                size="sm"
                                                outline
                                                onClick={() => handleRemoveItem(item)}  // استخدم دالة جديدة لإزالة العنصر
                                            >
                                                <MDBIcon size='lg' fas icon="trash-alt" />
                                            </MDBBtn>
                                        </div>
                                    </div>
                                </MDBCard>
                            </MDBCol>
                        );
                    })
                }

                <MDBCol xs={12} lg={5} id={Styles.col2}>
                    <MDBCard className={`${Styles.card} flex-column p-3 m-1`}>

                        <div className="d-flex justify-content-evenly align-items-center">
                            <img src={assets.logos.CartLogo} loading="lazy" alt="cartLogo" style={{
                                objectFit: 'contain',
                                maxWidth: "25vh",
                                maxHeight: '25vh',
                                padding: "1rem"
                            }} />
                            <div>
                                <h4>Count Items: <strong>{totalQuantity}</strong></h4>
                                <h4>Shipping Fees : <strong>{shippingPrice}$</strong></h4>
                                <h4>Total Items Price : <strong>{totalPrice.toFixed(2)}$</strong></h4>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center gap-1 mt-2">
                            <MDBBtn size="sm" color="danger" className="flex-grow-1" onClick={handleCancelCart}>Cancel Cart <MDBIcon fas icon="minus-square" /></MDBBtn>
                            <MDBBtn size="sm" outline color="success" className="flex-grow-1" onClick={handleCheckout}>Checkout <MDBIcon far icon="credit-card" /></MDBBtn>
                        </div>
                    </MDBCard>
                    <MDBCard id={Styles.col3} className={`${Styles.card} p-1 m-1`}>
                        <ItemsSlider />
                    </MDBCard>
                </MDBCol>
            </MDBRow>

            {/* ضع <Toaster /> في النهاية فقط مرة واحدة في المكون الأساسي */}
            <Toaster />
        </MDBContainer>
    );
}
