import React from 'react'
import Offer from "./Offer.js"
import "../styles/Offers.css"

const Offers = ({offerData}) => {
  return (
    <div className="offersSection"> 
    {offerData.map((item,index)=>(
    <Offer 
       key={index} 
       index={index} 
       src={item.image} 
       link={item.url}
     />
    ))}
</div>

  )
}

export default Offers