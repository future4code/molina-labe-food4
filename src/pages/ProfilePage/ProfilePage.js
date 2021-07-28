import React from "react";
import CreateIcon from "@material-ui/icons/Create";
// import { LinearProgress } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import {
  ContainerOrderHistory,
  Orders,
  TitleProfile,
  ContainerProfile,
  ContainerProfileEdit,
  BoxUser,
  BoxAddress,
  Icon,
  User,
} from "./styled";

const ProfilePage = () => {
  return (
    <ContainerProfile>
      <ContainerProfileEdit>
      <TitleProfile>
        <h3>Meu perfil</h3>
      </TitleProfile>
      <Divider variant="outlined" />
      <BoxUser>
        <button>
          <User>
          <p>Nome</p>
          <p>e-mail</p>
          <p>cpf</p>
          </User>
          <Icon><CreateIcon/></Icon>
        </button>
      </BoxUser>
      <BoxAddress>
        <button>
          <p>Endereço Cadastrado</p>
          <Icon><CreateIcon/></Icon>
        </button>
      </BoxAddress>
      <ContainerOrderHistory>
        <h3>Histórico de Pedidos</h3>
        {/* <p>
          <LinearProgress color="secondary" />
        </p> */}
        <Orders>
       <p>Você não realizou nenhum pedido</p>
       </Orders>
      </ContainerOrderHistory>
      </ContainerProfileEdit>
    </ContainerProfile>
  );
};

export default ProfilePage;
