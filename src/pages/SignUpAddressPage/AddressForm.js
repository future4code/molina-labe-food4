import React from 'react'
import useForm from '../../hooks/useForm'
import TextField from '@material-ui/core/TextField';
import { ConteinerInput } from './styled';
import Button from '@material-ui/core/Button';
import {SignUpAddressPage} from '../../services/user'
import { useHistory } from 'react-router-dom';



const AddressForm = () => {

    const history = useHistory()

    const [form, handleInputChange, clean] = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })
    
    const onSubmitForm = (e) => {
        e.preventDefault()

        SignUpAddressPage(form, clean, history)
    }


    return (
        <div>
            <form onSubmit={onSubmitForm}>


                <ConteinerInput>

                    <TextField
                        name={"street"}
                        value={form.street}
                        onChange={handleInputChange}
                        label={"logradouro"}
                        variant={"outlined"}
                        fullWidth
                        required
                        placeholder={"Rua/Av"}

                    />
                </ConteinerInput>

                <ConteinerInput>

                    <TextField
                        name={"number"}
                        value={form.number}
                        onChange={handleInputChange}
                        label={"numero"}
                        variant={"outlined"}
                        fullWidth
                        required
                        type={"number"}
                        placeholder={"Número"}

                    />
                </ConteinerInput>

                <ConteinerInput>

                    <TextField
                        name={"neighbourhood"}
                        value={form.neighbourhood}
                        onChange={handleInputChange}
                        label={"Bairro"}
                        variant={"outlined"}
                        fullWidth
                        required
                        type={"text"}
                        placeholder={"Centro"}

                    />
                </ConteinerInput>


                <ConteinerInput>

                    <TextField
                        name={"city"}
                        value={form.city}
                        onChange={handleInputChange}
                        label={"Cidade"}
                        variant={"outlined"}
                        fullWidth
                        required
                        type={"text"}
                        placeholder={"Teresina"}

                    />
                </ConteinerInput>


                <ConteinerInput>

                    <TextField
                        name={"state"}
                        value={form.state}
                        onChange={handleInputChange}
                        label={"Estado"}
                        variant={"outlined"}
                        fullWidth
                        required
                        type={"text"}
                        placeholder={"Piauí"}

                    />
                </ConteinerInput>

                <ConteinerInput>

                    <TextField
                        name={"complement"}
                        value={form.complement}
                        onChange={handleInputChange}
                        label={"Complemento"}
                        variant={"outlined"}
                        fullWidth
                        required
                        type={"text"}
                        placeholder={"Complemento"}

                    />
                </ConteinerInput>

                <ConteinerInput>

                    <Button
                        variant="contained"
                        color="primary"
                        type={"submit"}
                    >
                        Salvar
                    </Button>

                </ConteinerInput>



            </form>
        </div>
    )
}

export default AddressForm

