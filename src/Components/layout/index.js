import React from 'react'
import {Container } from './styles'


function Logo ({children}) {
    return(
        <Container>
            {children}
        </Container>
    )
}

export default Logo;