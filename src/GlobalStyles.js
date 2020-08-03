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
        ::-webkit-scrollbar {
        background-color:#191922;
        width:10px;
        border: 1px solid #52525d;
    }
    ::-webkit-scrollbar-thumb{
        background-color:#92929d;
        border-radius:5px;
        border:2px solid #52525d;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    }
    html,body,#root{
        width:100%;
        height:100%;
    }
    
`;