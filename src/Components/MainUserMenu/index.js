import React, { useState} from 'react';
import { SideMenu } from './styles'
import { FaMusic, FaMicrophoneAlt, FaThLarge, FaRegHeart, FaHeart } from 'react-icons/fa'

function Page() {
    
    const [hovering, setHovering ] = useState(false)
    const handleHovering = (e) =>{
        return (e.target !== true) ?  setHovering(<FaRegHeart size="1.5em"/>) : setHovering(<FaHeart size="1.5em"/>)
        console.log(hovering)
    }
    
    
    return(
        <SideMenu>
            <nav className="main--menu">
                <ul className="main--menu--container">
                    <li><FaMusic size="1.25em"/><span>Música</span></li>
                    <li><FaMicrophoneAlt size="1.25em"/><span>Shows</span></li>
                    <li><FaThLarge size="1.25em"/><span>Expolar</span></li>
                    <li onMouseEnter={(e) => handleHovering(e)} value={hovering}> <FaRegHeart size="1.5em"/><span>Favoritos</span></li>
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