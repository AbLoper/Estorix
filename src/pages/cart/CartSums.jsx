import { MDBBtn, MDBCard, MDBIcon } from "mdb-react-ui-kit";
import Styles from './cartSums.module.css';
import assets from '../../assets';

export default function CartSums({ totalPrice, shippingPrice, totalQuantity, handleCancelCart, handleCheckout }) {

    // تحقق من وجود القيم قبل استخدامها
    const safeTotalPrice = totalPrice ?? 0;
    const safeShippingPrice = shippingPrice ?? 0;
    const safeTotalQuantity = totalQuantity ?? 0;
    // const safeHandleCancelCart = handleCancelCart ?? () => {};
    // const safeHandleCheckout = handleCheckout ?? () => {};
    return (
        <>
          
        </>
    );
}
