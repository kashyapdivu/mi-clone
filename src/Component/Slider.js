import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({sliderData,comingFrom}) => {
  console.log("------coming from------> "+comingFrom)
  return (
    <Carousel fade>
        {sliderData && sliderData.map((imgItem,index)=>(
        <Carousel.Item key={index}>
         <img
              className="d-block w-100"
              src={comingFrom == 'end' ? imgItem.image : imgItem}
              alt={`${index} slider`}
            />
            {comingFrom == 'end' ?
            <Carousel.Caption>
              <h3>{imgItem.name}</h3>
              <p>{imgItem.description}</p>
              <p>{imgItem.source}</p>
              <u>{'READ MORE'}</u>
            </Carousel.Caption>
          :null}
        </Carousel.Item>
        ))}
       
    </Carousel>
  )
}

export default Slider