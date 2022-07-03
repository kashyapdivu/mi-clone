import React from 'react'

const ProductReviewCard = ({index, name, price,review, image}) => {
  return (
    <div className='productReviewCard'>
   <img src={image}  alt={`${index} product`}/>
    <h5>{review}</h5>
     <span>{name}</span>
     <b>{price}</b>
   
    </div>
  )
}

export default ProductReviewCard