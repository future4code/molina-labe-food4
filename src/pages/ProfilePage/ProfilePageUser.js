import React from 'react'
import {TextField} from "@material-ui/core";
import { Button } from "@material-ui/core";

const ProfilePageUser = () => {
    return (
        <div>
            <h1>Editar</h1>
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
          <Button
            variant={"contained"}
            color={"secondary"}
            type={"submit"}
            // onClick={EditUser}
            fullWidth
          >
            Salvar
          </Button>
        </form>
        </div>
    )
}

export default ProfilePageUser
