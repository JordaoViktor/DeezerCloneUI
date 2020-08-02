import React from 'react'
import { Logo } from './styles'
import deezerLogo from '../../assets/deezer-logo.svg' 

function Page (){
    return(
        <Logo>
            <img className="deezer--logo" src={deezerLogo} alt="deezerLogo"/>
        </Logo>
    )
} 
export default Page;