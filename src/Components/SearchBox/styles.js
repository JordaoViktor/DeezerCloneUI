import styled from 'styled-components';

export const SearchBox = styled.div`
    grid-area:search-box;
    background-color:#121216;
    width:auto;
    border: 2px solid #32323d;
    border-top:none;
    display:flex;
    justify-content:space-between;
    
`
export const ButtonContainer = styled.div`
    width:flex;
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
    width:12.5rem;
    height:100%;
    display: flex;
    align-items:center;
    justify-content:flex-end;

    .user--menu{
        width:35px;
        height:35px;
        background-color:#32323d;
        border-radius:50%;
        margin: 0 35px;
    }
`;

