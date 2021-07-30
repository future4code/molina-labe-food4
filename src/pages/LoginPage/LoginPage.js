import React, { useState } from 'react';
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
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import theme from "../../constants/theme";


const LoginPage = () => {
    const [form, handleInputChange, clean] = useForm({email: "", password:""})
    useUnprotectedPage()
    const history = useHistory()

    const onSubmitForm = (e) => {
        e.preventDefault()

        login(form, clean, history)
    }

    const [valueSenha, setValueSenha] = useState({
        showConfirmePassword: false,
    })

    const handleClickShowConfirme = () => {
        setValueSenha({...valueSenha, showConfirmePassword: !valueSenha.showConfirmePassword})
    }

    const handlePassword = (e) => {
        e.preventDefault()
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
                            placeholder={"email@email.com"}
                        
                        />
                    </ConteinerInput>

                    <ConteinerInput>

                            <FormControl variant="outlined">
                            
                            <InputLabel placeholder={"Minimo 6 caractere"} required htmlFor="outlined-adornment-password">Senha</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={valueSenha.showConfirmePassword ? 'text' : 'password'}
                                value={form.password}
                                name={"password"}
                                onChange={handleInputChange}
                                
                                endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowConfirme}
                                    onMouseDown={handlePassword}
                                    edge="end"
                                    >
                                    {valueSenha.showConfirmePassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
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
