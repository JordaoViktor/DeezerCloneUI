import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 250px 1.1fr;
    grid-template-rows: 75px 1.8fr 0.3fr;
    grid-template-areas: "logo search-box" "side-menu ." "music-player music-player";
`;

