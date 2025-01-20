import { MDBIcon } from 'mdb-react-ui-kit'
import Styles from './pageNotFound.module.css'
export default function PageNotFound() {
    return (
        <div className={Styles.errorMsg}>
            <MDBIcon icon="fa-solid fa-triangle-exclamation" size='10x' style={{ color: "#FFD43B"}} />
            <h3 className='bg-danger text-white'>Error 404</h3>
            <h1 className={Styles.title}>Page Not Found</h1>
        </div>
    )
}
