import Styles from './css/underConstruction.module.css'

export default function UnderConstrution() {
    return (
        <div className='d-flex justify-content-evenly align-items-center'>
            {/* <HandymanIcon style={{ fontSize: 35, color: 'bluelight' }} /> */}
            <h2 className={Styles.underConstruction} style={{ margin: '1rem 1rem' }}>
                WebStore Is UnderConstrution
            </h2>
            {/* <EngineeringIcon style={{ fontSize: 35, color: 'bluelight' }} /> */}
        </div>
    )
}