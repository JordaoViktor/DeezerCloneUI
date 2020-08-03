import React from 'react'
import { FaPlay,FaStepForward, FaStepBackward } from 'react-icons/fa'
import { Player } from './styles'

function Page(){
    return(
        <Player>
            <div className="player">
                <div className="hover--small">
                    <FaStepBackward  className="play--side"size="1.5em"/>
                </div>
                <div className="hover">
                    <FaPlay className="play"size="2em"/>    
                </div>
                <div className="hover--small">
                    <FaStepForward className="play--side" size="1.5em"/>
                </div>
            </div>

        </Player>
    )
} 
export default Page;