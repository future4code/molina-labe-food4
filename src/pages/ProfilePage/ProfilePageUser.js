import React from "react";
import { Divider, TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../constants/theme";
import { ChevronLeft } from "@material-ui/icons";
import {
  ContainerProfileUser,
  ContainerUser,
  ArrowLeftUser,
  ButtonRed,
  Title,
  HeaderUser,
} from "./styled";

const ProfilePageUser = () => {
  return (
    <ContainerProfileUser>
       <HeaderUser>
      <ArrowLeftUser>
            <Button>
              <ChevronLeft />
            </Button>
          </ArrowLeftUser>
        <Title>
          <h3>Editar</h3>
        </Title>
      </HeaderUser>
      <Divider variant="outlined" />
      <ContainerUser>
        <ThemeProvider theme={theme}>
          <form id={"addres_form"}>
            <TextField
              // value={form.name}
              name={"name"}
              // onChange={handleInput}
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
              // value={form.email}
              name={"email"}
              // onChange={handleInput}
              label="Email"
              placeholder="Email"
              type={"text"}
              variant={"outlined"}
              margin={"normal"}
              fullWidth
              required
            />
            <TextField
              // value={form.cpf}
              name={"cpf"}
              // onChange={handleInput}
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
                // onClick={createUser}
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
