import React, { useState } from 'react';
import { SideMenu } from './styles'
import { FaMusic, FaMicrophoneAlt, FaThLarge, FaRegHeart, FaHeart } from 'react-icons/fa'

function Page() {

const [hovering, setHovering] = useState(false)
const handleHovering = e => {
    const atribute = e.target !== true
    if(atribute !==false ){
        return setHovering(true)
    }
}
const handleLeave = e => {
    const atribute = e.target !== false
    if(atribute !==false){
        return setHovering(false)
    }
}
    return(
        <SideMenu>
            <nav className="main--menu">
                <ul className="main--menu--container">
                    <li><FaMusic size="1.25em"/><span>Música</span></li>
                    <li><FaMicrophoneAlt size="1.25em"/><span>Shows</span></li>
                    <li><FaThLarge className="heart"size="1.25em"/><span>Expolar</span></li>
                    <li onMouseOver={handleHovering}onMouseLeave={handleLeave} value={hovering}>
                    {hovering === true ? <FaHeart size="1.5em"/> : <FaRegHeart size="1.5em"/>}
                    <span>Favoritos</span></li>
                </ul>
                <div className="side--menu--info">
                    <ul className="side--menu--container">
                        <li className="side--menu--link">Mais queridas</li>
                        <li className="side--menu--link">Playlists</li>
                        <li className="side--menu--link">Álbuns</li>
                        <li className="side--menu--link">Artistas</li>
                        <li className="side--menu--link">Podcasts</li>
                    </ul>
                </div>
            </nav>
           
            
        </SideMenu>
    )
}


export default Page;