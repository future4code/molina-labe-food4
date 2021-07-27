import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import { Card, LinearProgress } from "@material-ui/core";
// import { ThemeProvider } from "@material-ui/core";
// import  theme  from "../../constants/theme";

const ProfilePage = () => {
  return (
    <div>
      <h1>Meu Perfil</h1>
      <p>
        <LinearProgress color="secondary" />
      </p>
      <Card variant="outlined">
        <p>Nome</p>
        <p>e-mail</p>
        <p>cpf</p>
        <CreateIcon />
      </Card>
      <Card variant="outlined">
        <p>Endereço Cadastrado</p>
        {/* <p>Rua, numero - cidade</p> */}
        <CreateIcon />
      </Card>
      <h2>Histórico de Pedidos</h2>
      <p>
          <LinearProgress color="secondary" />
        </p>
      <div>Pedido 1</div>
      <div>Pedido 2</div>
    </div>
  );
};

export default ProfilePage;
