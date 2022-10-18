import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useMediaQuery } from 'react-responsive';
import {NavLink, Link} from 'react-router-dom'

export default function Navigation() {

    const matches = useMediaQuery({query:'(max-width:768px)'})

  return (
    <div className='container'>
            <Navbar expand='md' className="mb-3 navigation" fixed='top'>
            <Container fluid>
                {/* Adding the logo */}
                <Navbar.Brand>  
                    <a href='#home'> 
                        <img className='img-fluid' width='120' height='70' src='./mayyadanar/yadanar-logo-black.png'/>
                    </a>
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls='offCanvasNavigation'>
                    <img src='./mayyadanar/list.svg'/>
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
                        <img className='img-fluid' width='120' height='70' src='./mayyadanar/yadanar-logo-yellow.png'/>
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                            <NavLink to='/' end  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink>
                            <NavLink to='/about' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>About</NavLink>
                            <NavLink to='/portfolio' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Portfolio</NavLink>
                            <NavLink to='/contact' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Contact</NavLink>
                    </Nav>

                    {matches && 
                    <>
                        <h4 className='connect'>
                            Connect with me
                        </h4>
                        <div className='social-icons'>
                            <a className='icons' href="https://www.linkedin.com/in/may-yadanar-noah-8a95131bb"><span>LinkedIn</span></a>
                            <a className='icons' href="https://www.twitter.com/noah_mydn"><span>Twitter</span></a>
                            <a className='icons' href="https://www.github.com/noah-mydn"><span>Github</span></a>
                        </div>
                    </>}
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
    </div>
  );
}

