import React from 'react'
import { ConteinerSignUpAddressPage, ButtonLogin, TextConteinerAddressPage } from './styled'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { goToLogin } from '../../routes/Cordinator';
import { useHistory } from 'react-router';
import AddressForm from './AddressForm';

const SignUpAddressPage = () => {

    const history = useHistory()


    return (
        <ConteinerSignUpAddressPage>
            <ButtonLogin onClick={()=> goToLogin(history)} ><ArrowBackIosIcon/></ButtonLogin>

            <TextConteinerAddressPage>Meu Endereço</TextConteinerAddressPage>

            <AddressForm />

        </ConteinerSignUpAddressPage>
    )
}

export default SignUpAddressPage
