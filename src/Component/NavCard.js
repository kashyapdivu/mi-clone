import React from 'react'
import "../styles/NavOptions.css";

const NavCard = ({key,image,name,price}) => {
   
  return (
    <div className="navCard" >
    <img src={image} alt={`${key} phone`} />
    <p>{name}</p>
    <span>{price}</span>
</div>
  )
}

export default NavCard