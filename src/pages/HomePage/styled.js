import styled from "styled-components";

export const ConteinerHomePage = styled.div ` 
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    background-color: #000000;
   
    @media(max-width: 480px) {
        margin: 0;
        padding: 0;
        width: 100%;
        min-height: 100vh;
        background-color: 000000;
        overflow: scroll;
    }

    @media(max-width: 350px) {
        margin: 0;
        overflow: scroll;
        padding: 0;
        width: 100%;
        min-height: 100vh;
        background-color: #000000;
    }
`

export const LogoHomePage = styled.img ` 
    width: max-content;
    height: max-content;
    display: block;
    margin: auto;
    margin-top: 250px;
    @media only screen and (min-width: 736px) {
        width: min-content;
        height: min-content;
        width: 250px;
        height: 250px;
        display: block;
        margin-top: 250px;
        margin: auto;
    }

`