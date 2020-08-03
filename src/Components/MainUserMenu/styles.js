import styled from 'styled-components';


export const SideMenu = styled.aside`
    grid-area: side-menu;
    background-color:#191922;
    width:250px;
    height:80vh;
    margin-top:75px;
    border:1px solid #32323d ;
    border-top:none;
    position:fixed;
    z-index:3;
    
    .main--menu{
        color:#f5f5f5;
        height:100%;
        font-size:20px;
        font-weight:bold;
    }
    .main--menu--container{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        height:50%;
        width:auto;
        li{
            width:100%;
            margin-bottom:30px;
            cursor:pointer;
            border-left:5px solid transparent;
        }
        
        li:focus svg{
            color:#ef5466;
            border-left:5px solid #ef5466;
            fill:#ef5466;
        }
        li:hover, li::before{
            content:icon;
            color:#ef5466;
            fill:#ef5466;
        }
    }
    svg{
        margin: 0px 30px ;

    }
    
    .side--menu--info{
        font-size:14px;
        font-weight:normal;
    }
    .side--menu--container{
        display:flex;
        flex-direction:column;
        justify-items:center;
        align-items:flex-start;
        color:#8b8b95;
        li{
            margin:10px 0px;
            padding-left:90px;
        }
    }
`