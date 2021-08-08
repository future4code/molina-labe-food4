import styled from "styled-components";

export const GlobalCartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 98vw;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: solid;
`;

export const AddressDeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 75px;
  background-color: #eeeeee;
`;

export const RestaurantDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 80px;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  justify-content: center;
  align-items: center;
`;

export const DeliveryPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 90%;
`;

export const SubTotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`;

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border-top: 1px solid black;
`;

export const ConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: silver;
  margin: 10px 0 10px 0;
`;

export const PLine = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0 0 5px 20px;
  padding: 0;
`;

export const PLine2 = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 5px 0 5px 0;
  padding: 0;
`;
