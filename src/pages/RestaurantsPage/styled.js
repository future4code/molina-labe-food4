import styled from "styled-components";

export const GlobalRestaurantPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const RestaurantPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 98vw;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: solid;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  margin: 10px 0 10px 0;
`;

export const PLine = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  padding: 0;
`;
