import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/Header/Header.css';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Navbar,Nav,Col ,Collapse,Brand} from 'react-bootstrap';
const Header = () =>{
  return(
    <div className='Header'>
      <Navbar collapseOnSelect expand="lg"  >
        <Link to="/"><img src="https://img.icons8.com/color/48/000000/crown.png"/></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/shop">SHOP</Nav.Link>
            <Nav.Link >CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default Header;
