import React from 'react';
import useForm from '../../hooks/useForm'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { singUp } from '../../services/user'
import { useHistory } from 'react-router-dom';
import { ConteinerInput } from './styled';


const SingUpForm = () => {

    const history = useHistory()
    const [form, onChange, clear ] = useForm({name: "", email: "", cpf:"", password:""})
    
    const onSubmitForm = (event) => {
        event.preventDefault()
        singUp(form,clear, history)
    }

    return(
        <div>

            <form onSubmit={onSubmitForm}> 

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
                    />
                </ConteinerInput>

                <ConteinerInput>
                    <TextField
                    name={"email"}
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
                        value={form.cpf}
                        onChange={onChange}
                        label={"CPF"}
                        variant={"outlined"}
                        fullWidth
                        type={"cpf"}
                        required
                    />

                </ConteinerInput>

                <ConteinerInput>

                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        type={"password"}
                        required
                    />
                </ConteinerInput>

                <ConteinerInput>

                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Confirmar"}
                        variant={"outlined"}
                        fullWidth
                        type={"password"}
                        required
                    />  

                </ConteinerInput>
                
            

                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >
                    Criar
                    
                </Button>
            </form>
        </div>
    )
}

export default SingUpForm;
