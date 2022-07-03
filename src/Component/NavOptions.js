import React, { useEffect, useState } from 'react'
import "../styles/NavOptions.css";
import NavCard from './NavCard.js';


const NavOptions = ({ miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio, accessories }) => {
    const [miPhoneToogle, setMiPhoneToogle] = useState(false);
    const [redmiPhonesToogle, setRedmiPhonesToogle] = useState(false);
    const [tvToogle, setTvToogle] = useState(false);
    const [laptopToogle, setLaptopToogle] = useState(false);
    const [fitnessAndLifeStyleToogle, setFitnessAndLifeStyleToogle] = useState(false);
    const [homeToogle, setHomeToogle] = useState(false);
    const [audioToogle, setAudioToogle] = useState(false);
    const [accessoriesToogle, setAccessoriesToogle] = useState(false);

    useEffect(()=>{
          if(window.location.pathname === '/miphones'){
            setMiPhoneToogle(true)
          }else if(window.location.pathname === '/redmiphones'){
            setRedmiPhonesToogle(true)
          }else if(window.location.pathname === '/laptops'){
            setLaptopToogle(true)
          }else if(window.location.pathname === '/lifestyle'){
            setFitnessAndLifeStyleToogle(true)
          }else if(window.location.pathname === '/home'){
            setHomeToogle(true)
          }else if(window.location.pathname === '/audio'){
            setAudioToogle(true)
          }else if(window.location.pathname === '/accessories'){
            setAccessoriesToogle(true)
          }else if(window.location.pathname === '/tv'){
            setTvToogle(true)
          }     
    },[miPhoneToogle,redmiPhonesToogle,tvToogle,laptopToogle,fitnessAndLifeStyleToogle,homeToogle,audioToogle,accessoriesToogle])

    return (
        <div className='navOptions'>
            {miPhoneToogle && miPhones ?
                miPhones && miPhones.map((item, index) =>
                    <NavCard
                        key={index} image={item.image}
                        name={item.name} price={item.price}
                     />
                )
                :
                redmiPhonesToogle && redmiPhones ?
                    redmiPhones && redmiPhones.map((item, index) =>
                        <NavCard
                            key={index} image={item.image}
                            name={item.name} price={item.price} />
                    )
                :
                tvToogle && tv ?
                        tv && tv.map((item, index) =>
                            <NavCard
                                key={index} image={item.image}
                                name={item.name} price={item.price} />
                        )
                 :
                   laptopToogle && laptop ?
                            laptop && laptop.map((item, index) =>
                                <NavCard
                                    key={index} image={item.image}
                                    name={item.name} price={item.price} />
                            )
                :
                    fitnessAndLifeStyleToogle && fitnessAndLifeStyle ?
                         fitnessAndLifeStyle && fitnessAndLifeStyle.map((item, index) =>
                            <NavCard
                                 key={index} image={item.image}
                                 name={item.name} price={item.price} />
                         )
                 :
                    homeToogle && home ?
                        home && home.map((item, index) =>
                            <NavCard
                                key={index} image={item.image}
                                name={item.name} price={item.price} />
                       )
                 :
                    audioToogle && audio ?
                        audio && audio.map((item, index) =>
                            <NavCard
                                key={index} image={item.image}
                                name={item.name} price={item.price} />
                        )
                 :
                    accessoriesToogle && accessories ?
                            accessories && accessories.map((item, index) =>
                                <NavCard
                                     key={index} image={item.image}
                                     name={item.name} price={item.price} />
                                )
                                : null
             }


        </div>
    )
}

export default NavOptions