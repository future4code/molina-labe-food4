import styled from "styled-components";

export const ConteinerErroPage = styled.div ` 
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
    background-color: #000000;
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

export const TextConteinerPageErro = styled.h1 ` 
    font-family: 'ROBOTO';
    color: #B8B8B8;
    text-align: center;
    margin-top: 150px;
    font: 16px;
`

export const AstroPerdido = styled.img ` 
    width: 250px;
    height: 250px;
    display: block;
    margin: auto;
    @media only screen and (min-width: 736px) {
        width: min-content;
        height: min-content;
        width: 250px;
        height: 250px;
        display: block;
        margin: auto;
    }

`