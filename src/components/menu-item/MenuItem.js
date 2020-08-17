import React from 'react';
import '../../styles/menu-item/MenuItem.css'
const MenuItem = ({title, imageUrl}) => {
  return(
    <div className= 'HomePage-menu-item'>
      <div  className="HomePage-content">
        <div className="HomePage-title">{title.toUpperCase()}</div>
        <span className="HomePage-subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}
export default MenuItem
