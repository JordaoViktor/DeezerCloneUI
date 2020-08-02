import styled from 'styled-components'

export const MainMenu = styled.main`
    grid-area: main-content;
    background-color:#121216;
    position:relative;
    overflow-y:scroll;
    ::-webkit-scrollbar {
        background-color:#191922;
        width:10px;
        border: 1px solid #52525d
    }
    ::-webkit-scrollbar-thumb{
        color:#52525d;
    }
`