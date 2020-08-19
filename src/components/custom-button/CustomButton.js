import React from 'react';
import '../../styles/custom-button/CustomButton.css';

const CustomButton = ({children, ...otherProps}) => {
  return(
    <button className="CustomButton" {...otherProps}>
      {children}
    </button>
  )
}
export default CustomButton;
