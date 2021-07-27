import React, { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../constants/urls";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [] = useState([]);
    
  
    useEffect(() => {
      
    });
  
   //requisição
  
    const states = { };
    const setters = { };
    const requests = { };
  
    const data = {  };
  
    return (
      <GlobalStateContext.Provider value={data}>
      
      </GlobalStateContext.Provider>
    );
  };
  
  export default GlobalState;
  