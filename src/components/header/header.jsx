import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useMediaQuery } from 'react-responsive';
import {Link} from 'react-router-dom'
import logoBlack from '../images/yadanar-logo-black.png';
import logoYellow from '../images/yadanar-logo-yellow.png';
import navTogglerBtn from '../images/list.svg';

export default function Navigation() {

    const matches = useMediaQuery({query:'(max-width:768px)'})

  return (
    <div className='row'>
            <Navbar expand='md' className="mb-3 navigation" fixed='top'>
            <Container fluid>
                {/* Adding the logo */}
                <Navbar.Brand href="#">
                    <img className='img-fluid' width='120' height='70' src={logoBlack}/>
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls='offCanvasNavigation'>
                    <img src={navTogglerBtn}/>
                </Navbar.Toggle> {/* Button toggler for mobile view */}

                {/* Adding nav items */}
                <Navbar.Offcanvas
                id='offCanvasNavigation'
                aria-labelledby='offCanvasNavigationLabel'
                placement="start"
                className='canvas-style'
                >
                <Offcanvas.Header closeButton closeVariant='white'>
                    <Offcanvas.Title id='offCanvasNavigation'>
                        <img className='img-fluid' width='120' height='70' src={logoYellow}/>
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Link to='/' className='link_style'>
                            <Nav.Item><Nav.Link href="#home">Home</Nav.Link></Nav.Item>
                        </Link>
                        <Link to='/about' className='link_style'>
                            <Nav.Item><Nav.Link href="#about">About</Nav.Link></Nav.Item>
                        </Link>
                        <Link to='/portfolio' className='link_style'>
                            <Nav.Item><Nav.Link href="#portfolio">Portfolio</Nav.Link></Nav.Item>
                        </Link>
                        <Link to='/contact' className='link_style'>
                            <Nav.Item><Nav.Link href="#contact">Contact</Nav.Link></Nav.Item>
                        </Link>
                    </Nav>

                    {matches && 
                    <>
                        <h4 className='connect'>
                            Connect with me
                        </h4>
                        <div className='social-icons'>
                            <a className='icons' href="https://www.linkedin.com/in/may-yadanar-noah-8a95131bb"><span>LinkedIn</span></a>
                            <a className='icons' href="https://www.twitter.com/noah_mydn"><span>Twitter</span></a>
                            <a className='icons' href="https://www.github.com/noah_mydn"><span>Github</span></a>
                        </div>
                    </>}
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
    </div>
  );
}

