import { FaScrewdriverWrench } from "react-icons/fa6";
import Styles from './underConstruction.module.css'

export default function UnderConstruction() {
    return (
        <div className='d-flex justify-content-evenly align-items-center px-4'>
            <FaScrewdriverWrench style={{ fontSize: 30, color: 'bluelight' }} />
            <h2 className={Styles.underConstruction} style={{ fontSize: "large", margin: '1rem 1rem' }}>
                WebStore Is UnderConstrution
            </h2>
            <FaScrewdriverWrench style={{ fontSize: 35, color: 'bluelight' }} />
        </div>
    )
}