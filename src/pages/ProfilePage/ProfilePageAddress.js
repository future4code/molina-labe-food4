import React from 'react'
import {TextField} from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import  theme  from "../../constants/theme";

const ProfilePageAddress = () => {
    return (
        <div>
            <h1>Endereço</h1> 
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
          <Button
            variant={"contained"}
            color={"secondary"}
            type={"submit"}
            // onClick={createAddres}
            fullWidth
          >
            Salvar
          </Button>
        </form>
        </ThemeProvider>
        </div>
    )
}

export default ProfilePageAddress
