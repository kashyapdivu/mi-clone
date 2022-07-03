import React, { useEffect, useState } from 'react';
import HotItemCard from './HotItemCard.js';
import "../styles/HotAccessoriesMenu.css"

const HotAccessories = ({ music, cover }) => {

    return (
        <div className='hotAccessories'>

            <div>
                <img src={cover} alt="Cover" />
            </div>

            {/* ------2nd bloack-------- */}

            <div>
                {music && music.map((item, index) =>
                    <HotItemCard index={index} key={index} name={item.name} price={item.price} image={item.image} />

                )}
{/* for browser more */}
<HotItemCard image={'https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg'}/>

            </div>
        </div>
    )
}

export default HotAccessories