import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LogoPreta from '../../assets/Img/logoPreta.png'
import { goToSignup } from '../../routes/Cordinator';
import { ThemeProvider } from "@material-ui/core/styles";
import {
    TextConteinerLoginPage,
    ButtonCadastro, 
    ConteinerLoginPage,
    ConteinerInput,
    LogoLoginPage 
} from './styled';
import useUnprotectedPage from '../../hooks/useUnProtect';
import useForm from '../../hooks/useForm'
import { login } from '../../services/user';
import { useHistory } from 'react-router';

import theme from "../../constants/theme";


const LoginPage = () => {
    const [form, handleInputChange, clean] = useForm({email: "", password:""})
    useUnprotectedPage()
    const history = useHistory()

    const onSubmitForm = (e) => {
        e.preventDefault()

        login(form, clean, history)
    }

    return (

        <ThemeProvider theme={theme}>

            <ConteinerLoginPage>
                <LogoLoginPage src={LogoPreta} alt={"Logo Ifuture na cor preta"}/>
            
            <TextConteinerLoginPage>Entrar</TextConteinerLoginPage>
            
            <form onSubmit={onSubmitForm} >

                    <ConteinerInput>
                        
                        <TextField
                            name={"email"}
                            value={form.email}
                            onChange={handleInputChange}
                            label={"E-mail"}
                            variant={"outlined"}
                            fullWidth
                            required
                            type={"email"}
                        
                        />
                    </ConteinerInput>

                    <ConteinerInput>

                        <TextField
                            name={"password"}
                            value={form.password}
                            onChange={handleInputChange}
                            label={"Senha"}
                            variant={"outlined"}
                            type={"password"}
                            required
                        />
                    </ConteinerInput>
                    
                    <ConteinerInput>

                        <Button 
                            variant="contained"
                            color="primary"
                            type={"submit"}
                        >
                            Entrar
                        </Button>

                    </ConteinerInput> 

                </form>

                <ButtonCadastro onClick={() => goToSignup(history)} > Não possui cadastro? Clique aqui.</ButtonCadastro>
                
            </ConteinerLoginPage>
        
        </ThemeProvider>
    )
}

export default LoginPage
