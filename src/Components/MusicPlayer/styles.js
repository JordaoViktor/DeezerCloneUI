import styled from 'styled-components'

export const Player = styled.section`
    grid-area:music-player;
    background-color:#23232d;
    border: 1px solid #32323d;
    position:fixed;
    width:100%;
    height:100px;
    margin-top:88vh;
    z-index:4;
    overflow:hidden;
    display:flex;
    align-items:center;
    .player{
        color:white;
        margin-left:30px;
        vertical-align:center;
        padding:10px;
        display:flex;
        .hover{
            width:60px;
            height:60px;
            background:transparent;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:50%;
            margin:0 20px;
        }
        .hover--small{
            width:40px;
            height:40px;
            background:transparent;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius:50%;
            margin-top:10px
        }
        .hover:hover,  .hover--small:hover{
            background:#42424c;
        }
        .play--side{
            /* margin-top:20px */
        }
    }
`

