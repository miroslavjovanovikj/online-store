import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/Header/Header.css';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Navbar,Nav,Col ,Collapse,Brand} from 'react-bootstrap';
import {auth} from '../../firebase/firebase-utils'
const Header = ({currentUser}) =>{
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
          {
            currentUser ?
                <Nav.Link onClick={()=>auth.signOut()}>SIGN OUT</Nav.Link> :
              <Nav.Link href="/signin">SIGN IN</Nav.Link>
          }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
const mapStateToProps =(state)=>({
  currentUser:state.user.currentUser
})
export default connect(mapStateToProps)(Header);
