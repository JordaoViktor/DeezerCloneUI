import styled from 'styled-components';

export const SearchBox = styled.div`
    grid-area:search-box;
    position:fixed;
    background-color:#121216;
    width:86%;
    margin-left:250px;
    height:75px;
    border: 1px solid #32323d;
    border-top:none;
    display:flex;
    justify-content:space-between;
    z-index:2;
    overflow-y:hidden;
    
`
export const ButtonContainer = styled.div`
    width:auto;
    height:100%;
    display:flex;
    align-items:center;
 
    svg{
        margin-left:20px
    }
    input{
        margin-left:20px;
        background:transparent;
        font-size:20px;
        color:#32323d;
        outline:none;
    }
`

export const UserNavContainer = styled.div`
    width:auto;
    height:100%;
    display: flex;
    align-items:center;
    justify-content:flex-end;
    
    

    svg{
        cursor:pointer;
        width:35px;
        height:35px;
        padding:5px;
        border-radius:50%;
    }
    svg:hover{
        background-color:#42424c;
    }
    .user--menu{
        width:45px;
        height:45px;
        background-color:#92929D;
        border-radius:50%;
        margin: 0 35px;
    }
`;

