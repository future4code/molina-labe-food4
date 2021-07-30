import React from 'react'
import useUnprotectedPage from '../../hooks/useUnProtect';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { goToLogin } from '../../routes/Cordinator';
import { 
    ConteinerSingUpPage,
    LogoSingUpPage,
    TextConteinerSingUpPage,
    ButtonLogin
} from './styled';
import LogoPreta from '../../assets/Img/logoPreta.png'
import SingUpForm from './singUpForm'
import { useHistory } from 'react-router-dom';

const SignUpPage = () => {
    const history = useHistory()

    useUnprotectedPage()
    return (
        <ConteinerSingUpPage>

            <ButtonLogin onClick={()=> goToLogin(history)} ><ArrowBackIosIcon/></ButtonLogin>

            <LogoSingUpPage src={LogoPreta}  alt={"Logo Ifuture preta"} />

            <TextConteinerSingUpPage>Cadastrar</TextConteinerSingUpPage>

            <SingUpForm/>

        </ConteinerSingUpPage>
    )
}

export default SignUpPage