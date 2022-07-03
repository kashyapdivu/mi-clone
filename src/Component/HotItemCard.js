import React from 'react'
import "../styles/HotItemCard.css"

const HotItemCard = ({image,price,name,index}) => {
  return (
    <div className='hotItemCard'>
        <img src={image} alt={`${index} product`}/>
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default HotItemCard