import React from "react";
import { Divider, TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../constants/theme";
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
  return (
    <ContainerProfileAddres>
      <Header>
      <ArrowLeft>
            <Button>
              <ChevronLeft />
            </Button>
          </ArrowLeft>
        <Title>
          <h3>Endereço</h3>
        </Title>
      </Header>
      <Divider variant="outlined" />
      <ContainerAddres>
        <ThemeProvider theme={theme}>
          <form id={"addres_form"}>
            <TextField
              // value={form.street}
              name={"street"}
              // onChange={handleInput}
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
              // value={form.number}
              name={"number"}
              // onChange={handleInput}
              label="Número"
              placeholder="Número"
              type={"number"}
              variant={"outlined"}
              margin={"normal"}
              fullWidth
              required
            />
            <TextField
              // value={form.neighbourhood}
              name={"neighbourhood"}
              // onChange={handleInput}
              label="Bairro"
              placeholder="Bairro"
              type={"text"}
              variant={"outlined"}
              margin={"normal"}
              fullWidth
              required
            />
            <TextField
              // value={form.city}
              name={"city"}
              // onChange={handleInput}
              label="Cidade"
              placeholder="Cidade"
              type={"text"}
              variant={"outlined"}
              margin={"normal"}
              fullWidth
              required
            />
            <TextField
              // value={form.state}
              name={"state"}
              // onChange={handleInput}
              label="Estado"
              placeholder="Estado"
              type={"text"}
              variant={"outlined"}
              margin={"normal"}
              fullWidth
              required
            />
            <TextField
              // value={form.complement}
              name={"complement"}
              // onChange={handleInput}
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
                // onClick={createAddres}
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
