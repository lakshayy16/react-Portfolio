import { Navbar,Container,Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {LinkContainer} from 'react-router-bootstrap';

const Connection =()=>{
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="Home">Lakshay Agarwal</Navbar.Brand>
                <Nav className="me-auto">

                {/* With this the page does not get reload . */}
                <LinkContainer to="/Home"> 
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/AboutMe">
                    <Nav.Link>About Me</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Courses">
                    <Nav.Link>Courses</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/TMS">
                    <Nav.Link>Tell Me Something</Nav.Link>
                </LinkContainer>

                {/* With the below step the page reloads while switching between url's */}
                {/* <Nav.Link href="Home">Home</Nav.Link>
                <Nav.Link href="AboutMe">About me</Nav.Link>
                <Nav.Link href="Courses">Courses</Nav.Link>
                <Nav.Link href="TMS">Tell Me Something</Nav.Link> */}
                
                </Nav>
            </Container>
        </Navbar>
        )
}

export default Connection;