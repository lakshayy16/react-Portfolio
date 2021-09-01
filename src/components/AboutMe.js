
import { Carousel } from "react-bootstrap"
import image from '../components/images/image.jpg';
import image2 from '../components/images/image2.jpg'
import image3 from '../components/images/image3.jpg'

const AboutMe = () => {
    return(
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={image}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Something About me</h3>
            <p>Graduate from MUJ on Computer and Communication</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Software Developer</h3>
            <p>Always learning something new in this digital world</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Financial Literacy</h3>
            <p>Reading about different segments of the market - Fundamental/Technical Analysis</p>
            </Carousel.Caption>
        </Carousel.Item>
</Carousel>
    )
}
export default AboutMe

