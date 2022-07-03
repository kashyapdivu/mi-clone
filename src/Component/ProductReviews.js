import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import "../styles/ProductReview.css"

const ProductReviews = ({ productReviews }) => {
    return (
        <div className='productReview'>
            {productReviews && productReviews.map((item,index) =>
                <ProductReviewCard 
                  index={index}
                  key={index} 
                  name={item.name} 
                  price={item.price} 
                  review={item.review}
                  image={item.image} 
             />
            )}
        </div>
    )
}

export default ProductReviews