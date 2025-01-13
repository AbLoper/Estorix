import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Styles from '../styles/cart.module.css'

export default function Cart() {
    return (
        <MDBContainer style={{ marginTop: "10rem" }} className={`${Styles.container} text-light`}>
            <MDBRow className={`${Styles.productQuantity} d-flex gap-1`}>
                <MDBCol sm={12} md={8} xl={8} className="text-center bg-info">
                    Hello From Cart
                </MDBCol>
                <MDBCol sm={12} md={4} xl={4} className="text-center bg-success">
                    Hello From Cart
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}