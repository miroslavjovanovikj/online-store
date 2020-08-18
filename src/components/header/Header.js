import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/Header/Header.css';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Navbar,Nav,Col ,Collapse} from 'react-bootstrap';
const Header = () =>{
  return(
    <div className='Header'>
      <Navbar collapseOnSelect expand="lg"  >
        <Navbar.Brand >  <Link to="/"><Logo className="Logo" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link></Nav.Link>
            <Nav.Link ></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link ><Link to="/shop">SHOP</Link></Nav.Link>
            <Nav.Link href="#deets"><Link to="/shop">CONTACT</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default Header;
