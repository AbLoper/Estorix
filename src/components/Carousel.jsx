import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import CarouselImages from '../assets.js'
import Styles from '../styles/carousel.module.css'

export default function Carousel() {
    const interval = 3000

    return (

        <MDBCarousel
            showIndicators={false}
            showControls={false}
            fade={true}
            interval={interval}
            ride={null}
            className={Styles.carouselInner}
        >        <MDBCarouselItem className={Styles.carouselItem} itemId={1}>
                <img
                    src={CarouselImages.carousel1}
                    className={`${Styles.carouselImage} d-block w-100`}
                    alt='...'
                />
                <MDBCarouselCaption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem className={Styles.carouselItem} itemId={2}>
                <img
                    src={CarouselImages.carousel2}
                    className={`${Styles.carouselImage} d-block w-100`}
                    alt='...'
                />
                <MDBCarouselCaption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem className={Styles.carouselItem} itemId={3}>
                <img
                    src={CarouselImages.carousel3}
                    className={`${Styles.carouselImage} d-block w-100`}
                    alt='...'
                />
                <MDBCarouselCaption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselCaption>
            </MDBCarouselItem>
        </MDBCarousel>
    );
}