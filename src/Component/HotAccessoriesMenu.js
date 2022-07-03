import React from 'react'
import {Link} from "react-router-dom";
import "../styles/HotAccessoriesMenu.css"

const menu =[
    { id :1, link: '/music',title: 'Music Store' },
    { id :2, link: '/smart-devices',title: 'Smart Device' },
    { id :3, link: '/home',title: 'Home' },
    { id :4, link: '/lifeStyle',title: 'LifeStyle' },
    { id :5, link: '/mobile-accessories',title: 'Mobile Accessories' },
]

const HotAccessoriesMenu = () => {
  return (
    <div className='hotAccessoriesMenu'>
        {menu.map((item)=>
        
        <Link key={item.id} className="hotAccessoriesLink" to={item.link}>{item.title}</Link>
        )}
        
    </div>
  )
}

export default HotAccessoriesMenu