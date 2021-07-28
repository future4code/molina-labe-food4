import React from 'react'
import useUnprotectedPage from '../../hooks/useUnProtect';
import { 
    ConteinerSingUpPage,
    LogoSingUpPage,
    TextConteinerSingUpPage
} from './styled';
import LogoPreta from '../../assets/Img/logoPreta.png'
import SingUpForm from './singUpForm'

const SignUpPage = () => {
    useUnprotectedPage()
    return (
        <ConteinerSingUpPage>

            <LogoSingUpPage src={LogoPreta}  alt={"Logo Ifuture preta"} />

            <TextConteinerSingUpPage>Cadastrar</TextConteinerSingUpPage>

            <SingUpForm/>

        </ConteinerSingUpPage>
    )
}

export default SignUpPage