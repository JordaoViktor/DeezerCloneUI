import React from 'react';
import { SearchBox, ButtonContainer, UserNavContainer } from './styles';
import { FaSearch, FaBell }   from 'react-icons/fa'

function Page(){
    return(
        <SearchBox>
            <ButtonContainer>
                <FaSearch size="1.5em" color="#32323d"/>
                <input type="text" placeholder="Buscar"/>
            </ButtonContainer>
            <UserNavContainer>
                <FaBell size="1.5em"  color="#32323d"/>
                <div className="user--menu"></div>
            </UserNavContainer>
        </SearchBox>
    );
}

export default Page;