import React from 'react';
import '../../styles/collection-item/CollectionItem.css';
import {Container,Row,Col} from 'react-bootstrap';

const CollectionItem = ({id, name, price, imageUrl}) =>{
  return(
    <div className="Collection-item">
     <div
       className='Image'
       style={{backgroundImage:`url(${imageUrl})`}}
     />
     <div className='Collection-footer'>
       <span className='name'>{name}</span>
       <span className='price'>${price}</span>
     </div>

   </div>
  )
}

export default CollectionItem;
