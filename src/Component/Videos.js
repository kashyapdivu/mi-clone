import React from 'react'
import '../styles/Videos.css'
const playButton =  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>


const Videos = ({videos}) => {
  return (
    <div className='videos'>
        {videos && videos.map((item ,index)=>
         <div className="videoCard" style={{backgroundImage:`url(${item.image})`}} key={index}>
        
         <a href="#/">{playButton}</a>          
         <p>{item.name}</p>  
        </div>
        )}
    </div>
  )
}

export default Videos