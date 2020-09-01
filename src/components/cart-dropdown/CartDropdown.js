import React from 'react';
import CustomButton from '../custom-button/CustomButton'
import '../../styles/cart-dropdown/CartDropdown.css'

const CartDropdown =()=>{
  return(
    <div className='Cart-dropdown'>
    <div className='Cart-items'></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}
export default CartDropdown;
