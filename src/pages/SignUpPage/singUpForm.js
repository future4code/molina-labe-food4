import React, { useState } from 'react';
import useForm from '../../hooks/useForm'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { singUp } from '../../services/user'
import { useHistory } from 'react-router-dom';
import { ConteinerInput, ConteinerInputSenha } from './styled';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const SingUpForm = () => {

    const history = useHistory()
    const [form, onChange, clear ] = useForm({name: "", email: "", cpf:"", password:"", confirmPassword: ""})
    
    const [values, setValues] = useState({
        showPassword: false,
    });

    const [valueSenha, setValueSenha] = useState({
        showConfirmePassword: false,
    })

    const handleClickShowConfirme = () => {
        setValueSenha({...valueSenha, showConfirmePassword: !valueSenha.showConfirmePassword})
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handlePassword = (e) => {
        e.preventDefault()
    }

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    const onSubmitForm = (event) => {
        event.preventDefault()
        if(confirmeSenha()) {
            singUp(form,clear, history)
        }
        
    }


    const confirmeSenha = () => {
        if(form.password !== form.confirmPassword ) {
            alert("Senhas diferentes")
            return false
        }
        else {
            return true
        }
    }

    return(

        <div>

            <form onSubmit={onSubmitForm} > 

                <ConteinerInput>
                    <TextField
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    label={"Nome"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    placeholder={"Nome e sobrenome"}
                    />
                </ConteinerInput>

                <ConteinerInput>
                    <TextField
                    name={"email"}
                    placeholder={"email@email.com"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    required
                    type={"email"}
                    
                    />
                </ConteinerInput>

                <ConteinerInput>

                    <TextField
                        name={"cpf"}
                        placeholder={"000.000.000-00"}
                        value={form.cpf}
                        onChange={onChange}
                        label={"CPF"}
                        variant={"outlined"}
                        fullWidth
                        type={"cpf"}
                        required
                    />

                </ConteinerInput>

                <ConteinerInputSenha>

                <FormControl variant="outlined">
                    
                    <InputLabel required htmlFor="outlined-adornment-password">Senha</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={valueSenha.showConfirmePassword ? 'text' : 'password'}
                        value={form.password}
                        name={"password"}
                        onChange={onChange}
                        
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

                </ConteinerInputSenha>

                <ConteinerInput>

                <FormControl variant="outlined">
                    <InputLabel required htmlFor="outlined-adornment-password">Confirmar</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        required
                        type={values.showPassword ? 'text' : 'password'}
                        value={form.confirmPassword}
                        onChange={onChange}
                        name={"confirmPassword"}
                        endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
                    

                </ConteinerInput>
            
                <ConteinerInput>

                     <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}

                    >
                        Criar
                        
                    </Button>
            
                </ConteinerInput>
            </form>
        </div>
    )
}

export default SingUpForm;
