import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        border:none;
        ul,li{
            list-style:none;
        }
    }
    html,body,#root{
        width:100%;
        height:100%;
    }
    
`;