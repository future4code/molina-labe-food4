import React from 'react'
import LogoCinza from '../../assets/Img/logoCinza.png'
import { ConteinerHomePage, LogoHomePage } from './styled'
import { goToFeed } from '../../routes/Cordinator'
import { useHistory } from 'react-router'

const HomePage = () => {
    const history = useHistory()
    return (
        <ConteinerHomePage onClick={() => goToFeed(history)} >
           <LogoHomePage src={LogoCinza} alt={"Logo na cor cinza"}/>
        </ConteinerHomePage>
    )
}

export default HomePage;
