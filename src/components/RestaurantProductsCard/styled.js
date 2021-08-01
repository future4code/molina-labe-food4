import styled from "styled-components";

export const RestaurantDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 98vw;
  align-items: center;
`;

export const RestaurantCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 120px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px 0 10px 0;
`;

export const TimeDeliveryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;

export const ImageRestaurantCard = styled.img`
  display: flex;
  width: 100px;
  height: 120px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const TextRestaurantCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 120px;
  width: 180px;
`;

export const AddButton = styled.div`
  display: flex;
  flex-direction: row;
  height: 120px;
  align-items: flex-end;
  button {
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 35px;
    width: 90px;
    background-color: white;
  }
`;
