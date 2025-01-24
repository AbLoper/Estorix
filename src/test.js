// import { MDBBtn, MDBBtnGroup, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
// import Styles from './cart.module.css';
// import { useDispatch, useSelector } from "react-redux";
// import { removeFromCart, incrementItem, decrementItem } from "../../reduxToolkit/slices/cartSlice";

// export default function Cart() {
//     const dispatch = useDispatch();
//     const cartItems = useSelector(state => state.cart.items);

//     // حساب العدد الإجمالي للمنتجات المختارة
//     const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

//     // حساب مجموع السعر بناءً على الكمية
//     const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//     return (
//         <MDBContainer fluid id={Styles.container} className='text-dark d-flex flex-column justify-content-center align-items-center'>
//             <MDBRow>
//                 {
//                     cartItems.map((item, index) => {
//                         const itemTotal = item.price * item.quantity;
//                         return (
//                             <MDBCol key={item.id} className="d-flex justify-content-center align-items-center  border border-1">
//                                 {item.image ? (
//                                     <MDBCard id={Styles.card} className='d-flex justify-content-center align-items-center'>
//                                         <MDBCardImage
//                                             id={Styles.cardImage}
//                                             src={item.image}
//                                             alt="..."
//                                             position="top"
//                                         />
//                                     </MDBCard>
//                                 ) : (
//                                     <div>Image not available</div>
//                                 )}
//                                 <MDBCardBody id={Styles.cardBody} className='d-flex flex-column'>
//                                     <MDBCardText>{item.category}</MDBCardText>
//                                     <MDBCardTitle>{item.title}</MDBCardTitle>
//                                     <p>{item.price}$</p>
//                                     <p>Quantity: {item.quantity}</p>
//                                     <p>Total for this item: ${itemTotal.toFixed(2)}</p>

//                                     <MDBBtnGroup shadow="0" aria-label="Basic example" size="sm" className="gap-1">
//                                         <MDBBtn color="success" outline onClick={() => dispatch(incrementItem(item))}>+</MDBBtn>
//                                         <MDBBtn color="danger" outline onClick={() => dispatch(decrementItem(item))}>-</MDBBtn>
//                                     </MDBBtnGroup>

//                                     <MDBBtn color="secondary" className="my-1" size="sm" outline onClick={() => dispatch(removeFromCart(item))}>
//                                         Remove
//                                     </MDBBtn>
//                                 </MDBCardBody>
//                             </MDBCol>
//                         );
//                     })
//                 }

//                 {/* عرض عدد المنتجات المختارة ومجموع السعر في الأعلى */}

//                 <MDBCol className="bg-warning">
//                     <div>
//                         <h4>Total Items: {totalQuantity}</h4>
//                         <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
//                     </div>
//                 </MDBCol>
//             </MDBRow>
//         </MDBContainer>
//     );
// }