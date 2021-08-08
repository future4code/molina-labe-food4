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
} from "./styledProfile";
import { useHistory } from "react-router-dom";
import { goToEditAddress} from "../../routes/Cordinator";
import {goToEditUser}from "../../routes/Cordinator";

const ProfileCard = (props) => {

const history = useHistory()
  return (
    <ContainerProfile>
      <ContainerProfileEdit>
        <TitleProfile>
          <h3>Meu perfil</h3>
        </TitleProfile>
        <Divider variant="outlined" />
        <BoxUser>
          <button onClick={() => goToEditUser(history)}>
            <User>
              <div>{props.user.name}</div>
              <div>{props.user.email}</div>
              <div>{props.user.cpf}</div>
            </User>
            <Icon>
              <CreateIcon />
            </Icon>
          </button>
        </BoxUser>
        <BoxAddress>
          <button  onClick={() => goToEditAddress(history)} >
            <p>Endereço Cadastrado</p>
            {props.address.neighbourhood}
            {props.address.number}
            {props.address.city}
            {props.address.apartment}
            {props.address.state}
            {props.address.street}
            <Icon>
              <CreateIcon />
            </Icon>
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
export default ProfileCard;
