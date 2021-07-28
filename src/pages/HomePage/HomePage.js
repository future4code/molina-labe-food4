import React from 'react'
import LogoCinza from '../../assets/Img/logoCinza.png'
import { ConteinerHomePage, LogoHomePage } from './styled'

const HomePage = () => {
    return (
        <ConteinerHomePage>
           <LogoHomePage src={LogoCinza} alt={"Logo na cor cinza"}/>
        </ConteinerHomePage>
    )
}

export default HomePage;
