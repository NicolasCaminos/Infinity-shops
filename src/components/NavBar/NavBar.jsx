import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import LogoInfinity from '../../assets/img/4.png'
import CartWidget from '../Cart/CartWidget'
import { Link } from 'react-router-dom'



function NavBar() {

    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Link to="/" >
                    <Navbar.Brand><img className="logo_Infinity" src={`${LogoInfinity}`}></img></Navbar.Brand>
                </Link>

                <Nav className="me-auto">

                    <Link to="/category/MLA1071">Notebook</Link>
                    <Link to="/category/MLA1403">Software</Link>
                    <Link to="/category/MLA1512">Tablets y Accesorios</Link>

                </Nav>

            </Container>
 
            < CartWidget />
        </Navbar >
    )

}

export default NavBar;