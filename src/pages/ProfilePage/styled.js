import styled from "styled-components";

//Comum a todos

export const ButtonRed = styled.div`
  button {
    margin-top: 2%;
    background-color: black;
    color: white;
    font-family: "Roboto-Regular";
    font-weight: normal;
  }
`;

//Profile

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerProfileEdit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const TitleProfile = styled.div`
  display: flex;
  justify-content: center;
  
  h3 {
    /* position: relative;
    top: 10px; */
    font-size: 18px;
    font-family: "Roboto-Regular";
    font-weight: normal;
  }
`;

export const User = styled.div``;

export const Icon = styled.div`
  margin-right: 15px;
`;

export const BoxUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid #b8b8b8;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
    width: 100vw;
    border: none;
    background-color: white;
    :hover {
      background-color: #b8b8b8;
    }
  }

  p {
    font-size: 18px;
    font-family: "Roboto";
    font-weight: normal;
    margin: 10px;
  }
`;

export const BoxAddress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 15vh;
  border-bottom: 1px solid #b8b8b8;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
    width: 100vw;
    height: 15vh;
    border: none;
    background-color: white;

    :hover {
      background-color: #b8b8b8;
    }
  }

  p {
    font-size: 18px;
    font-family: "Roboto";
    font-weight: normal;
    margin: 10px;
    color: #b8b8b8;
  }
`;
export const ContainerOrderHistory = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 15px;

  h3 {
    font-size: 18px;
    font-family: "Roboto-Regular";
    font-weight: normal;
    border-bottom: 2px solid black;
  }
`;

export const Orders = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    justify-items: center;
    font-size: 18px;
    font-family: "Roboto";
    font-weight: normal;
    margin: 10px;
  }
`;

//Profile Address

export const ContainerProfileAddres = styled.div``;

export const ContainerAddres = styled.div`
  position: relative;
  bottom: 5px;
  margin: 15px;

  input {
    height: 2vh;
    color: black;
  }
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  `

export const Title = styled.div`
  display: flex;
  
  h3 {
    /* position: relative;
    top: 10px; */
    font-size: 18px;
    font-family: "Roboto-Regular";
    font-weight: normal;
  }
`;
export const ArrowLeft = styled.div`
  display: flex;
  background-color: black;
  width: 0.5vw;
  height: 8vh;
  justify-content: flex-end;
  position: relative;
  right: 80px;
  background-color: white;

  button {
    border: none;
    width: 5vw;
    color: black;
    background-color: white;
  }
`;

//Profile User

export const HeaderUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  `

export const TitleUser = styled.div`
  display: flex;
  
  h3 {
    /* position: relative;
    top: 10px; */
    font-size: 18px;
    font-family: "Roboto-Regular";
    font-weight: normal;
  }
`;
export const ArrowLeftUser = styled.div`
  display: flex;
  background-color: black;
  width: 0.5vw;
  height: 8vh;
  justify-content: flex-end;
  position: relative;
  right: 90px;
  background-color: white;

  button {
    border: none;
    width: 5vw;
    color: black;
    background-color: white;
  }
`;

export const ContainerProfileUser = styled.div``;

export const ContainerUser = styled.div`
  position: relative;
  bottom: 5px;
  margin: 15px;

  input {
    height: 2vh;
    color: black;
  }
`;
