import React, {useEffect} from "react";
import { Divider, TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../constants/theme";
import useForm from "../../hooks/useForm";
import {addOrEditAdress} from "../../services/profile"
import  { useHistory } from "react-router-dom";
import { goToProfile } from "../../routes/Cordinator";
import {
  ContainerProfileAddres,
  ContainerAddres,
  ArrowLeft,
  ButtonRed,
  Title,
  Header,
} from "./styled";
import { ChevronLeft } from "@material-ui/icons";

const ProfilePageAddress = () => {
  const [ form, onChange, clear ] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    apartment: "",
  });
  
  const history = useHistory()

  const onClickEditAddress = () => {
    addOrEditAdress(form, clear);
    goToProfile(history)
  };
  return (
    <ContainerProfileAddres>

      <Header>
        <ArrowLeft>
          <Button>
            <ChevronLeft  onClick={() => goToProfile(history)} />
          </Button>
        </ArrowLeft>
        <Title>
          <h3>Endereço</h3>
        </Title>
      </Header>
      <Divider variant="outlined" />
      <ContainerAddres>
        <ThemeProvider theme={theme}>
          <form onSubmit={onClickEditAddress}>
            <TextField
             name={"street"}
              value={form.street}
              onChange={onChange}
              label="Logradouro"
              placeholder="Rua / Av."
              type={"text"}
              variant={"outlined"}
              margin={"normal"}
              fullWidth
              required
              autoFocus
            />
            <TextField
              value={form.number}
              name={"number"}
              onChange={onChange}
              label="Número"
              placeholder="Número"
              type={"number"}
              variant={"outlined"}
              margin={"normal"}
              fullWidth
              required
            />
            <TextField
              value={form.neighbourhood}
              name={"neighbourhood"}
              onChange={onChange}
              label="Bairro"
              placeholder="Bairro"
              type={"text"}
              variant={"outlined"}
              margin={"normal"}
              fullWidth
              required
            />
            <TextField
              value={form.city}
              name={"city"}
              onChange={onChange}
              label="Cidade"
              placeholder="Cidade"
              type={"text"}
              variant={"outlined"}
              margin={"normal"}
              fullWidth
              required
            />
            <TextField
              value={form.state}
              name={"state"}
              onChange={onChange}
              label="Estado"
              placeholder="Estado"
              type={"text"}
              variant={"outlined"}
              margin={"normal"}
              fullWidth
              required
            />
            <TextField
              value={form.apartment}
              name={"apartment"}
              onChange={onChange}
              label="Complemento"
              placeholder="Apto. / Bloco"
              type={"text"}
              variant={"outlined"}
              margin={"normal"}
              fullWidth
            />
            <ButtonRed>
              <Button
                variant={"contained"}
                type={"submit"}
                onClick={onClickEditAddress}
                fullWidth
              >
                Salvar
              </Button>
            </ButtonRed>
          </form>
        </ThemeProvider>
      </ContainerAddres>
    </ContainerProfileAddres>
  );
};

export default ProfilePageAddress;
