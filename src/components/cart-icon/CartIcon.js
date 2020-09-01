import React from 'react';
import '../../styles/cart-icon/CartIcon.css';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cartActions'
import  {ReactComponent as ShoppingIcon} from '../../assets/bag.svg';

const CartIcon =({toggleCartHidden})=>{
  return(
    <div className="Cart-icon" onClick={toggleCartHidden}>

      <ShoppingIcon  className="Shopping-icon"/>
      <span className="Item-count"> 0 </span>
    </div>
  )
}
const mapDispatchToProps =(dispatch)=>{
  return{
    toggleCartHidden:()=>{dispatch(toggleCartHidden())}
  }
}
export default connect(null,mapDispatchToProps)(CartIcon);
