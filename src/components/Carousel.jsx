import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import CarouselImages from '../assets.js'

export default function Carousel() {
    const interval = 2500

    return (
        <MDBCarousel
            showIndicators={false}
            showControls={false}
            fade={true}
            interval={interval}
            ride={null}
        >
            <MDBCarouselItem itemId={1}>
                <img
                    src={CarouselImages.carousel1}
                    className="d-block w-100"
                    alt="First slide"
                />
                <MDBCarouselCaption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem itemId={2}>
                <img
                    src={CarouselImages.carousel2}
                    className="d-block w-100"
                    alt="Second slide"
                />
                <MDBCarouselCaption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem itemId={3}>
                <img
                    src={CarouselImages.carousel3}
                    className="d-block w-100"
                    alt="Third slide"
                />
                <MDBCarouselCaption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselCaption>
            </MDBCarouselItem>
        </MDBCarousel>
    );
}
