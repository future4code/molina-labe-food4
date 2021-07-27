import React from 'react';
import {TextConteinerPageErro,AstroPerdido, ConteinerErroPage } from './styled';
import AstroBot from '../../assets/Img/atrobot.png'
const ErrorPage = () => {
    return (
        <ConteinerErroPage>
            <TextConteinerPageErro> PAGE NOT FOUND </TextConteinerPageErro>
            <AstroPerdido src={AstroBot} alt={"Astronalta perdido"} />
        </ConteinerErroPage>
    )
}

export default ErrorPage
