import React, { useEffect } from "react";
import { Divider, TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../constants/theme";
import useForm from "../../hooks/useForm";
import { updateProfile } from "../../services/profile";
import { ChevronLeft } from "@material-ui/icons";
import {
  ContainerProfileUser,
  ContainerUser,
  ArrowLeftUser,
  ButtonRed,
  Title,
  HeaderUser,
} from "./styled";
import { useHistory } from "react-router-dom";
import { goToEditAddress, goToProfile } from "../../routes/Cordinator";

const ProfilePageUser = () => {
  const [ form, onChange, clear ] = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  const history = useHistory()

  const onClickUpdateProfile = () => {
    updateProfile(form, clear);
    goToProfile(history)
  };

  return (
    <ContainerProfileUser>
      <HeaderUser>
        <ArrowLeftUser>
          <Button>
            <ChevronLeft onClick={() => goToEditAddress(history)} />
          </Button>
        </ArrowLeftUser>
        <Title>
          <h3>Editar</h3>
        </Title>
      </HeaderUser>
      <Divider variant="outlined" />
      <ContainerUser>
        <ThemeProvider theme={theme}>
          <form onSubmit={onClickUpdateProfile}>
            <TextField
              value={form.name}
              name="name"
              onChange={onChange}
              label="Nome"
              placeholder="Nome"
              type={"text"}
              variant={"outlined"}
              margin={"normal"}
              fullWidth
              required
              autoFocus
            />
            <TextField
              value={form.email}
              name={"email"}
              onChange={onChange}
              label="Email"
              placeholder="Email"
              type={"text"}
              variant={"outlined"}
              margin={"normal"}
              fullWidth
              required
            />
            <TextField
              value={form.cpf}
              name={"cpf"}
              onChange={onChange}
              label="CPF"
              placeholder="Cpf"
              type={"number"}
              variant={"outlined"}
              margin={"normal"}
              fullWidth
              required
            />
            <ButtonRed>
              <Button
                variant={"contained"}
                type={"submit"}
                onClick={onClickUpdateProfile}
                fullWidth
              >
                Salvar
              </Button>
            </ButtonRed>
          </form>
        </ThemeProvider>
      </ContainerUser>
    </ContainerProfileUser>
  );
};

export default ProfilePageUser;
